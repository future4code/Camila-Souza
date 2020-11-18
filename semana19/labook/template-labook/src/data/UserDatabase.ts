import { connection } from './connection';
import { User } from './../model/User';

class UserDatabase {

    private tableName: string = "labook_users"
 
    public getTableName = (): string => this.tableName
 
    public async signup(
       user: User
    ) {try {
        await connection
             .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
             }).into(this.tableName)
    } catch (error) {
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
        }
    }
    public async getUserByEmail(
        email: string
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
}
export default new UserDatabase()   