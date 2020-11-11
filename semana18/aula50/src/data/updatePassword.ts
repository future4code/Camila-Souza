import { userTableName } from '../constants/userTables';
import { connection } from './../constants/connection';

export async function updatePassword(
    id:string,
    newPassword: string
    ) {
    await connection.raw(`
        UPDATE '${userTableName}'
        SET password = '${newPassword}'
        WHERE id = "${id};
    `)
}