import { Request, Response, NextFunction } from "express";
import User from "../entity/User";
import { encryptPassword, verifyPassword } from "../helpers/crypt";
import EmailAlreadyRegisterError from "../helpers/errors/EmailAlrealyRegisterError";
import NotRegisteredUserError from "../helpers/errors/NotRegisteredUserError";
import InvalidPasswordError from "../helpers/errors/InvalidPasswordError";

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

        res.json(newUser);
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

        const user = await User.findOneBy({
            email: email,
        });
        if (user === null) {
            throw new NotRegisteredUserError();
        }
        if ((await verifyPassword(user.password, password)) === false) {
            throw new InvalidPasswordError();
        }

        res.json(user);
    } catch (error) {
        next(error);
    }
};
