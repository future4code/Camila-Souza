import { USER_ROLES } from './user';
export type AuthenticationData = {
    id: string,
    role: USER_ROLES
};