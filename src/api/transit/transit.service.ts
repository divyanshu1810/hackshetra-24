import { ObjectId } from "mongodb";
import database from "../../loaders/database";
import { Transit } from "../../models/transit";
import shortid from "shortid";

export const handleCreateTransit = async (transit: Transit, user: string) => {
    const collection = (await database()).collection('transit');
    const statusCollection = (await database()).collection('status');
    const statusId = shortid.generate();
    await collection.insertOne({
        ...transit,
        as_per_bill: false,
        tally_entry_to_goods: false,
        scan_for_every_bill: false,
        on_the_record: false,
        received: false,
        userId: user,
        isDeleted: false,
        statusId,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    await statusCollection.insertOne({
        transitId: statusId,
        location: "Warehouse",
        remark: "Transit Created",
        createdAt: new Date(),
        updatedAt: new Date(),
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