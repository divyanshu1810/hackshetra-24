import { Request, Response } from "express";
import { handleSignUp } from "./user.service";

export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, password, company } = req.body;
        const role = res.locals.user.role;
        await handleSignUp(name, email, password, role, company);
        res.status(201).json({ success: true, message: `user created successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};