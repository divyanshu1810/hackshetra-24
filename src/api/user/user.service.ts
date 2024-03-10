import database from "../../loaders/database";
import { Users } from "../../models/users";
import bcrypt from 'bcrypt';

export const handleSignUp = async (name: string, email: string, password: string, company: string, role: string) => {
    const collection = (await database()).collection('users');
    const user = await collection.findOne({ email });
    if (user) {
        throw new Error('User already exist with same email');
    }
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new Users(new Date(), new Date(), name, email, hash, role, false, company);
    await collection.insertOne(newUser);
};