import { CustomError } from './../services/customError';
import UserDatabase from '../data/UserDatabase';
import HashManager from '../services/hashManager';
import IdGenerator from '../services/idGenerator';
import { CreateUserInput, User, AuthenticationData, AddFriend } from './../model/User';
import Authenticator from '../services/authenticator';

class UserBusiness {
    public async signup(input: CreateUserInput): Promise<string> {
        try {
            if (
               !input.name || 
               !input.email || 
               !input.password
               ) {
               throw new CustomError(406, "'name', 'e-mail' and 'password' must be provided")
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
            throw new CustomError(400, error.message)

         }
    }
//--------------------------------------
    public async login (input: any): Promise<any> {
       let message = "success"
        try {
            if (
               !input.email || 
               !input.password
               ) {
               throw new CustomError(406, "'e-mail' and 'password' must be provided")
            }
            
            const user: User = await UserDatabase.getUserByEmail(input.email)

            const passwordIsTrue: boolean = await HashManager.compare(input.password, user.getPassword())
      
            const token: string = Authenticator.generateToken({
               id: input.id
            }) as string
            
            if (!user) {
               throw new CustomError(404, "User not found")
            }

            
            if (!passwordIsTrue) {
               throw new CustomError(401, "Invalid credentials")
            }
            const tokenData: AuthenticationData = Authenticator.getTokenData(token)
        
            if(!tokenData){
               throw new CustomError(401, "Unauthorized")
            }

            return ({
                message, 
                token
            })
           
         } catch (error) {
            throw new CustomError(400, error.message)
         }
      }
//--------------------------------------
   public async addFriendById(
      input: AddFriend
      ): Promise<string>{
      try {
         if(!input.id){
               throw new CustomError(406, "'id' must be provided")
            }
         const tokenData: AuthenticationData = Authenticator.getTokenData(input.token)
         const friend1: string = tokenData.id!
         const friend2: string = input.id
         console.log(friend1, friend2)
         const friends = await UserDatabase.addFriendById(
            friend1,
            friend2
         ) 
         return friends
      } 
      catch (error) {
         throw new CustomError(400, error.message)
      }
   }
//--------------------------------------
}
export default new UserBusiness()