import { userTableName } from '../constants/userTableName';
import { connection } from '../constants/connection';


export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
){
    await connection
        .insert({
            id,
            name,
            nickname,
            email,
            password,
            role
        })
        .into(`${userTableName}`);
};

export enum USER_ROLES {
    normal,
    admin,
}