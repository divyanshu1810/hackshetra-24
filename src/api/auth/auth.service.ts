import database from "../../loaders/database";
import bcrypt from 'bcrypt';
import generateToken from "../../shared/jwt";
import { Users } from "../../models/users";

export const handleSignUp = async (name: string, email: string, password: string, company: string) => {
    const collection = (await database()).collection('users');
    const user = await collection.findOne({ email });
    if (user) {
        throw new Error('User already exist with same email');
    }
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new Users(new Date(), new Date(), name, email, hash, 'admin', false, company);
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