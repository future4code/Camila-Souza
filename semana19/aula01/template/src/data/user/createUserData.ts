import { connection } from '../connection';


export default async function createUserData(
    id: string,
    email: string,
    name: string,
    password: string,
	role: USER_ROLES //opcional criar ENUM
  ): Promise<void> {
    try {
      await connection()
        .insert({
        id,
        email,
        name,
        password,
		role
        })
        .into("User_Arq");
    } catch (error) {
      throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
  }

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}