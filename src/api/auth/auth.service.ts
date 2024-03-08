import database from "../../loaders/database";
import bcrypt from 'bcrypt';
import shortid from 'shortid';
import generateToken from "../../shared/jwt";
import { Users } from "../../models/users";

export const handleSignUp = async (name: string, email: string, password: string, role: string) => {
    const collection = (await database()).collection('users');
    const user = await collection.findOne({ email });
    if (user) {
        throw new Error('User already exist with same email');
    }
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new Users(shortid.generate(), new Date(), new Date(), name, email, hash, role, false);
    await collection.insertOne(newUser);
};

export const handleLogIn = async (email: string, password: string): Promise<unknown> => {
    const data = await (await database()).collection('users').findOne({ email: email });
    if (!data) {
        throw { statusCode: 404, message: 'User Does Not Exsist' };
    }
    const res = await bcrypt.compare(password, data.password);
    if (!res) {
        throw { statusCode: 401, message: 'Incorrect Password / Not Allowed' };
    }
    const token = generateToken(email);
    return {
        token,
        role: data.role,
        name: data.name
    }
};