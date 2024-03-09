import { ObjectId } from "mongodb";
import database from "../../loaders/database";

export const handleGetStatus = async (transitId: string, user: string) => {
    const trasnitCollection = (await database()).collection('transit');
    const transit = await trasnitCollection.findOne({ _id: new ObjectId(transitId), userId: user, isDeleted: false });
    if (!transit) {
        throw new Error('Transit does not exist');
    }
    const statusCollection = (await database()).collection('status');
    return await statusCollection.findOne({ transitId: transit.statusId });
};

export const handleUpdateStatus = async (transitId: string, location: string, remark: string, user: string) => {
    const collection = (await database()).collection('transit');
    const transit = await collection.findOne({ _id: new ObjectId(transitId), userId: user, isDeleted: false });
    if (!transit) {
        throw new Error('Transit does not exist');
    }
    const statusCollection = (await database()).collection('status');
    await statusCollection.updateOne({ transitId: transit.statusId }, { $set: { location, remark } });
};