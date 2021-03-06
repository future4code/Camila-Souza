export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}
export enum USER_ROLES {
    normal = "normal",
    admin = "admin"
}