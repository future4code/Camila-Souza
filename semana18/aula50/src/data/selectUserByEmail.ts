import { userTableName } from '../constants/userTables';
import { connection } from '../constants/connection';
import { User } from "../constants/types";

export default async function selectUserByEmail(
    email: string
) : Promise<User> {
    try {
        const result = await connection(`${userTableName}`)
        .select("*")
        .where({ email })

        return result[0]

    } catch (error) {
        throw new Error(error.message)
    }
    
}