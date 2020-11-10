import { userTableName } from '../constants/userTableName';
import { connection } from '../constants/connection';


export default async function insertUser(
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
){
    await connection
        .insert({
            id,
            email,
            password,
            role
        })
        .into(userTableName);
};

export enum USER_ROLES {
    NORMAL,
    ADMIN,
}