import { tableUsers } from './../constants/tables';
import { connection } from './../constants/connection';
import { User } from "../types/user";

export default async function selectUserByEmail(
    email:string
    ): Promise<User> {
    try {
        const getEmail = await connection(tableUsers)
        .select("*")
        .where({ email })

        return getEmail[0]

    } catch (error) {
        throw new Error(error.message)
    }
};