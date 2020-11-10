import { userTableName } from '../constants/userTableName';
import { connection } from '../constants/connection';


export default async function deleteUser(
    id: string
): Promise<any>{
    await connection
        .delete()
        .from({userTableName})
        .where({ id });
};