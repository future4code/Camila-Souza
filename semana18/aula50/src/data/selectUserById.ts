import { userTableName } from '../constants/userTableName';
import { connection } from '../constants/connection';
import { User } from "../constants/types";

export default async function selectUserById(
    id: string
) : Promise<User> {
    try {
        const result = await connection({userTableName})
        .select("*")
        .where({ id })

        return result[0]

    } catch (error) {
        throw new Error(error.message)
    }
    
}