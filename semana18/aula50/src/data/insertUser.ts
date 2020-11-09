import { userTableName } from '../constants/userTableName';
import { connection } from '../constants/connection';


export default async function insertUser(
    id: string,
    email: string,
    password: string
){
    await connection
        .insert({
            id,
            email,
            password
        })
        .into(userTableName);
};