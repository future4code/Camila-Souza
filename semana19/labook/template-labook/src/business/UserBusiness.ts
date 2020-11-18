import UserDatabase from '../data/UserDatabase';
import HashManager from '../services/hashManager';
import IdGenerator from '../services/idGenerator';
import { CreateUserInput, User } from './../model/User';
import { AuthenticationData } from './../model/User';
import Authenticator from '../services/authenticator';

class UserBusiness {
    public async signup(input: CreateUserInput): Promise<string> {
        try {
            let message = "Success!"
        
            if (!input.name || !input.email || !input.password) {
               message = '"name", "email" and "password" must be provided'
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

    public login =  async (input: any): Promise<any> => {
        try {
            let message = "Success!"
            
            const user: User = await UserDatabase.getUserByEmail(input.email)
      
            if (!input.email || !input.password) {
               message = '"email" and "password" must be provided'
               throw new Error(message)
            }
      
            const passwordIsCorrect: boolean = await HashManager.compare(input.password, user.getPassword())
      
            if (!passwordIsCorrect) {
               message = "Invalid credentials"
               throw new Error(message)
            }
            const id: string = input.id
            const token: string = Authenticator.generateToken({id}) as string
            const tokenData: AuthenticationData = Authenticator.getTokenData(token)
        
            if(!tokenData){
                message = 'Unauthorized';
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