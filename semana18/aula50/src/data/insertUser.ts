import { userTableAddress, userTableName } from '../constants/userTables';
import { connection } from '../constants/connection';

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
    user_id: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
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

        await connection
        .insert({
            user_id,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
        .into(`${userTableAddress}`);
};

export enum USER_ROLES {
    normal,
    admin,
}