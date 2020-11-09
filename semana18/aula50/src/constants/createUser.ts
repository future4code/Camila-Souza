import { connection } from './connection';

const userTableName = "week18_users";

const createUser = async (
    id: string,
    email: string,
    password: string
) => {
    await connection
        .insert({
            id,
            email,
            password
        })
        .into(userTableName);
};