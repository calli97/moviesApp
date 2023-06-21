import bcrypt from "bcryptjs";

export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (
    storesPassword: string,
    password: string
) => {
    return await bcrypt.compare(password, storesPassword);
};
