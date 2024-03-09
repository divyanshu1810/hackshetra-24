import { ObjectId } from "mongodb";
import database from "../../loaders/database";
import { Transit } from "../../models/transit";

export const handleCreateTransit = async (transit: Transit, user: string) => {
    const collection = (await database()).collection('transit');
    await collection.insertOne({
        ...transit,
        userId: user,
        isDeleted: false,
        createdAt: new Date(),
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
    return await collection.findOne({ _id: new ObjectId(id), userId: user, isDeleted: false });
}

export const handleUpdateTransit = async (id: string, transit: Transit, user: string) => {
    const collection = (await database()).collection('transit');
    return await collection.updateOne({ _id: new ObjectId(id), userId: user, isDeleted: false }, { $set: transit });
};

export const handleDeleteTransit = async (id: string, user: string) => {
    const collection = (await database()).collection('transit');
    return await collection.updateOne({ _id: new ObjectId(id), userId: user, isDeleted: false }, { $set: { isDeleted: true } });
};