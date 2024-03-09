import { Request, Response } from "express";
import { handleGetStatus, handleUpdateStatus } from "./status.service";

export const getStatus = async (req: Request, res: Response) => {
    try {
        const { transitId } = req.params;
        const user = res.locals.user._id;
        const status = await handleGetStatus(transitId, user);
        res.status(200).json({
            success: true,
            message: "status fetched successfully",
            data: status,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateStatus = async (req: Request, res: Response) => {
    try {
        const { transitId } = req.params;
        const { location, remark } = req.body;
        const user = res.locals.user._id;
        await handleUpdateStatus(transitId, location, remark, user);
        res.status(200).json({
            success: true,
            message: "status updated successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};