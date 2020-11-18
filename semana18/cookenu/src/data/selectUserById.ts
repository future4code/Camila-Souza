import { tableUsers } from './../constants/tables';
import { connection } from './../constants/connection';
import { User } from "../types/user";

export default async function selectUserById(
    id:string
    ): Promise<User> {
    try {
        const selectUser = await connection(tableUsers)
        .select("*")
        .where({ id })

        return selectUser[0]
    } catch (error) {
        throw new Error(error.message)
    }
}