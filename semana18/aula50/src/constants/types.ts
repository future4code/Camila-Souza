import { USER_ROLES } from './../data/insertUser';
export type AuthenticationData = {
    id: string,
    role: USER_ROLES
};

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
};