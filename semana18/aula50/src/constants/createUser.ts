import { connection } from './connection';

const userTableName = "week18_users";

export const createUser = async (
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