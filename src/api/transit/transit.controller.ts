import { Request, Response } from "express";
import { handleCreateTransit, handleDeleteTransit, handleGetTransit, handleGetTransitById, handleUpdateTransit } from "./transit.service";
import { isAuthorisedToDoTheActivity } from "../../shared/role";

export const createTransit = async (req: Request, res: Response) => {
    try {
        const isAuthorised = isAuthorisedToDoTheActivity(res.locals.user.role);
        if (!isAuthorised) {
            res.status(401).json({ message: "Not Authorised" });
            return;
        }
        await handleCreateTransit(req.body, res.locals.user._id);
        res.status(201).json({ success: true, message: `transit created successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTransit = async (req: Request, res: Response) => {
    try {
        const isAuthorised = isAuthorisedToDoTheActivity(res.locals.user.role);
        if (!isAuthorised) {
            res.status(401).json({ message: "Not Authorised" });
            return;
        }
        const data = await handleGetTransit(res.locals.user._id);
        res.status(200).json({ success: true, message: `transit fetched successfully`, data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTransitById = async (req: Request, res: Response) => {
    try {
        const isAuthorised = isAuthorisedToDoTheActivity(res.locals.user.role);
        if (!isAuthorised) {
            res.status(401).json({ message: "Not Authorised" });
            return;
        }
        const data = await handleGetTransitById(req.params.id, res.locals.user._id);
        res.status(200).json({ success: true, message: `transit fetched successfully`, data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTransit = async (req: Request, res: Response) => {
    try {
        const isAuthorised = isAuthorisedToDoTheActivity(res.locals.user.role);
        if (!isAuthorised) {
            res.status(401).json({ message: "Not Authorised" });
            return;
        }
        await handleUpdateTransit(req.params.id, req.body, res.locals.user._id);
        res.status(200).json({ success: true, message: `transit updated successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTransit = async (req: Request, res: Response) => {
    try {
        const isAuthorised = isAuthorisedToDoTheActivity(res.locals.user.role);
        if (!isAuthorised) {
            res.status(401).json({ message: "Not Authorised" });
            return;
        }
        await handleDeleteTransit(req.params.id, res.locals.user._id);
        res.status(200).json({ success: true, message: `transit deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
