import { User } from './../model/User';
import BaseDatabase from './BaseDatabase';

class UserDatabase extends BaseDatabase {

    private static tableName: string = "labook_users"
 
    public getTableName = (): string => UserDatabase.tableName
 
    public async signup(
       user: User
    ) {try {
        await BaseDatabase.connection
             .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
             }).into(UserDatabase.tableName)
    } catch (error) {
        throw new Error("Database error: " + error.sqlMessage);
        }
    }

    public async getUserByEmail(
        email: string
     ): Promise<User> {
        try {
        const input: any = await BaseDatabase.connection
            .select("*")
            .where({ email })
            .from(UserDatabase.tableName)
            
         console.log(input)
         if (!input) {
            throw new Error("Invalid credentials")
         }
       
        return new User(
            input[0].id, 
            input[0].name, 
            input[0].email, 
            input[0].password)

    } catch (error) {
        throw new Error("Database error: " + error.slqMessage)
        }
    }
}
export default new UserDatabase()   