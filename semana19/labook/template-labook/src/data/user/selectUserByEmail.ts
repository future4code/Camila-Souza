import { connection } from './../connection';
import { User } from "../../model/User";

export default async function selectUserByEmail(
    email:string
    ): Promise<User> {
    try {
        const queryResult: any = await connection("labook_users")
         .select("*")
         .where({ email })

         if (!queryResult[0]) {
            throw new Error("Invalid credentials")
         }
        return queryResult[0]
    } catch (error) {
        throw new Error("Erro de banco de dados: " + error.slqMessage)
    }
}




