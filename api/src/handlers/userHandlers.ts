import { Request, Response, NextFunction } from "express";
import User from "../entity/User";
import { encryptPassword, verifyPassword } from "../helpers/crypt";
import EmailAlreadyRegisterError from "../helpers/errors/EmailAlrealyRegisterError";
import NotRegisteredUserError from "../helpers/errors/NotRegisteredUserError";
import InvalidPasswordError from "../helpers/errors/InvalidPasswordError";
import jwt from "jsonwebtoken";
import Role from "../entity/Role";

export const signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { firstName, lastName, password, email } = req.body;

        const verification = await User.findOneBy({
            email: email,
        });
        if (verification !== null) {
            throw new EmailAlreadyRegisterError();
        }

        let newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = await encryptPassword(password);
        newUser.email = email;

        await newUser.save();
        const userRole = await Role.findOneBy({
            name: "user",
        });
        if (userRole !== null) {
            newUser.role = userRole;
            await newUser.save();
        }
        const token = jwt.sign(
            {
                id: newUser.userId,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                role: newUser.role,
            },
            "secret",
            {
                expiresIn: 86400, //24Hours
            }
        );

        res.json({ token });
    } catch (error) {
        next(error);
    }
};

export const signIn = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email,
            },
            relations: {
                role: true,
            },
        });
        if (user === null) {
            throw new NotRegisteredUserError();
        }
        if ((await verifyPassword(user.password, password)) === false) {
            throw new InvalidPasswordError();
        }
        const token = jwt.sign(
            {
                id: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            },
            "secret",
            {
                expiresIn: 86400, //24Hours
            }
        );

        res.json({ token });
    } catch (error) {
        next(error);
    }
};
