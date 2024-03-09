import database from "../../loaders/database";
import { Transit } from "../../models/transit";

export const handleCreateTransit = async (transit: Transit, user: string) => {
    const collection = (await database()).collection('transit');
    await collection.insertOne({
        ...transit,
        userId: user,
        isDeleted: false
    });
};

export const handleGetTransit = async (user: string) => {
    const collection = (await database()).collection('transit');
    return await collection.find({
        userId: user,
        isDeleted: false
    }).toArray();
};

export const handleGetTransitById = async (id: string, user: string) => {
    const collection = (await database()).collection('transit');
    const data = await collection.findOne({ _id: id, userId: user });
    if (!data) {
        throw new Error('Transit not found');
    }
    if (data.isDeleted) {
        throw new Error('Transit not found');
    }
    if (data.userId !== user) {
        throw new Error('Transit not found');
    }
    return data;
}

export const handleUpdateTransit = async (id: string, transit: Transit, user: string) => {
    const collection = (await database()).collection('transit');
    const data = await collection.findOne({ _id: id, userId: user });
    if (!data) {
        throw new Error('Transit not found');
    }
    if (data.isDeleted) {
        throw new Error('Transit not found');
    }
    if (data.userId !== user) {
        throw new Error('Transit not found');
    }
    await collection.updateOne({ _id: id }, { $set: transit });
};

export const handleDeleteTransit = async (id: string, user: string) => {
    const collection = (await database()).collection('transit');
    const data = await collection.findOne({ _id: id, userId: user });
    if (!data) {
        throw new Error('Transit not found');
    }
    if (data.isDeleted) {
        throw new Error('Transit not found');
    }
    if (data.userId !== user) {
        throw new Error('Transit not found');
    }
    await collection.updateOne({ _id: id }, { $set: { isDeleted: true } });
};