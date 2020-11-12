import { tableUsers } from './../constants/tables';
import { connection } from './../constants/connection';
import { User } from "../types/user";

export default async function insertUser(
    user: User
    ): Promise<void> {
    const { id, name, email, password } = user

    await connection
        .insert({
            id,
            name,
            email,
            password
        })
        .into(tableUsers);
};