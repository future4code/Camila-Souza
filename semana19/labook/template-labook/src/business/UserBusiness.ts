import UserDatabase from '../data/UserDatabase';
import HashManager from '../services/hashManager';
import IdGenerator from '../services/idGenerator';
import { CreateUserInput, User, AuthenticationData } from './../model/User';
import Authenticator from '../services/authenticator';

class UserBusiness {
    public async signup(input: CreateUserInput): Promise<string> {
        try {
            let message = "Success!"
        
            if (
               !input.name || 
               !input.email || 
               !input.password) {
               message = "'name', 'email' and 'password' must be provided"
               throw new Error(message)
            }
        
            const id: string = IdGenerator.generateId()
            const cypherPassword = await HashManager.hash(input.password)
            
            const newUser: User = new User(
                id,
                input.name,
                input.email,
                cypherPassword
            )

            await UserDatabase.signup(newUser)
            const token: string = Authenticator.generateToken({id}) as string

            return token;
        
         } catch (error) {

            let message = error.sqlMessage || error.message
            return message;

         }
    }

    public async login (input: any): Promise<any> {
        try {
            let message = "Success!"
            
            if (!input.email || !input.password) {
               message = "'email' and 'password' must be provided"
               throw new Error(message)
            }
            
            const user: User = await UserDatabase.getUserByEmail(input.email)

            const passwordIsTrue: boolean = await HashManager.compare(input.password, user.getPassword())
      
            const token: string = Authenticator.generateToken({
               id: input.id
            }) as string
            
            if (!user) {
               message = "User not found"
               throw new Error(message)
            }

            
            if (!passwordIsTrue) {
               message = "Invalid credentials"
               throw new Error(message)
            }
            const tokenData: AuthenticationData = Authenticator.getTokenData(token)
        
            if(!tokenData){
                message = "Unauthorized";
                throw new Error(message);
            }

            return ({
                message, 
                token
            })
           
         } catch (error) {
            let message = error.sqlMessage || error.message
            return message
         }
      }

}
export default new UserBusiness()