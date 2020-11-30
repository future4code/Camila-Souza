import { CustomError } from './../services/customError';
import { User, AddFriend, getUserIdInput } from './../model/User';
import BaseDatabase from './BaseDatabase';

class UserDatabase extends BaseDatabase {

    private static tableName: string = "labook_users"
    private static tableFriends: string = "labook_friends"
 
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
//--------------------------------------
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
            throw new CustomError(401, "Invalid credentials")
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
//--------------------------------------
public async getUserById(
    id: string
 ): Promise<any> {
    try {
    const input: any = await BaseDatabase.connection
        .select("*")
        .where({ id })
        .from(UserDatabase.tableName)
        
     if (!input) {
        throw new CustomError(401, "Invalid credentials")
     }
    } catch (error) {
        throw new Error("Database error: " + error.slqMessage)
    }
}
//--------------------------------------
    public async addFriendById(
        friend1:string,
        friend2:string
        ): Promise<any> {
   
                await BaseDatabase.connection
                    .insert({
                        "friend1": friend1,
                        "friend2": friend2
                    })
                    .into(UserDatabase.tableFriends) 
                await BaseDatabase.connection
                    .insert({
                        "friend1": friend2,
                        "friend2": friend1
                    })
                    .into(UserDatabase.tableFriends)
        }
//--------------------------------------   
}
export default new UserDatabase()   