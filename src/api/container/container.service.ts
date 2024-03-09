import { ObjectId } from "mongodb";
import database from "../../loaders/database";

export const handleCreateContainer = async (transitId: string, billNumber: string, amount: number, user: string) => {
    const transitCollection = (await database()).collection('transit');
    const transit = await transitCollection.findOne({ _id: new ObjectId(transitId), userId: user, isDeleted: false });
    if (!transit || transit.isDeleted) {
        throw new Error('Transit does not exist');
    }
    const conatinerCollection = (await database()).collection('container');
    await conatinerCollection.insertOne({
        transitId,
        billNumber,
        amount,
        userId: user,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
};

export const handleGetContainers = async (transitId: string, user: string) => {
    const transitCollection = (await database()).collection('transit');
    const transit = await transitCollection.findOne({ _id: new ObjectId(transitId), userId: user, isDeleted: false });
    if (!transit || transit.isDeleted) {
        throw new Error('Transit does not exist');
    }
    const containerCollection = (await database()).collection('container');
    return await containerCollection.find({
        transitId,
        userId: user,
    }).toArray();
};

export const handleGetContainerById = async (transitId: string, containerId: string, user: string) => {
    const transitCollection = (await database()).collection('transit');
    const transit = await transitCollection.findOne({ _id: new ObjectId(transitId), userId: user, isDeleted: false });
    if (!transit || transit.isDeleted) {
        throw new Error('Transit does not exist');
    }
    const containerCollection = (await database()).collection('container');
    const container = await containerCollection.findOne({ _id: new ObjectId(containerId), transitId, userId: user });
    if (!container) {
        throw new Error('Container does not exist');
    }
    return container;
};

export const handleUpdateContainer = async (transitId: string, containerId: string, billNumber: string, amount: number, user: string) => {
    const transitCollection = (await database()).collection('transit');
    const transit = await transitCollection.findOne({ _id: new ObjectId(transitId), userId: user, isDeleted: false });
    if (!transit || transit.isDeleted) {
        throw new Error('Transit does not exist');
    }
    const containerCollection = (await database()).collection('container');
    const container = await containerCollection.findOne({ _id: new ObjectId(containerId), transitId, userId: user });
    if (!container) {
        throw new Error('Container does not exist');
    }
    await containerCollection.updateOne({ _id: new ObjectId(containerId), transitId }, { $set: { billNumber, amount } });
};