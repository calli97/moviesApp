import { Request, Response, NextFunction } from "express";
import User from "../entity/User";
import { encryptPassword } from "../helpers/crypt";
import EmailAlreadyRegisterError from "../helpers/errors/EmailAlrealyRegisterError";

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

export const signIn = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
        next(error);
    }
};
