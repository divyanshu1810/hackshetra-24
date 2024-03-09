import { Request, Response } from "express";
import { handleCreateContainer, handleGetContainerById, handleGetContainers, handleUpdateContainer } from "./container.service";

export const createContainer = async (req: Request, res: Response): Promise<void> => {
    try {
        const transitId = req.params.transitId;
        const { billNumber, amount } = req.body;
        await handleCreateContainer(transitId, billNumber, amount, res.locals.user._id);
        res.status(200).json({
            success: true,
            message: "container created successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getContainers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { transitId } = req.params;
        const containers = await handleGetContainers(transitId, res.locals.user._id);
        res.status(200).json({
            success: true,
            message: "containers fetched successfully",
            data: containers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getContainerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { transitId, containerId } = req.params;
        const container = await handleGetContainerById(transitId, containerId, res.locals.user._id);
        res.status(200).json({
            success: true,
            message: "container fetched successfully",
            data: container,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateContainer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { transitId, containerId } = req.params;
        const { billNumber, amount } = req.body;
        await handleUpdateContainer(transitId, containerId, billNumber, amount, res.locals.user._id);
        res.status(200).json({
            success: true,
            message: "container updated successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};