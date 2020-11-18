import { tableUsers } from './../constants/tables';
import { connection } from './../constants/connection';

export default async function updatePassword(
    id:string,
    newPassword:string
    ): Promise<string> {
        try {
            const updateUserPassword: string = await connection(tableUsers)
            .where({ id })
            .update("password", newPassword);
    
            return updateUserPassword[0]
        } catch (error) {
            throw new Error(error.message)
        }
    }