import { Request, Response } from "express";
import { handleLogIn, handleSignUp } from "./auth.service";

export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, password, company } = req.body;
        await handleSignUp(name, email, password, company);
        res.status(201).json({ success: true, message: `user created successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const data = await handleLogIn(email, password);
        res.status(200).json({ success: true, message: `user logged in succesfully`, data });
    } catch (error) {
        res.status(error.statusCode).json({ message: error.message });
    }
};