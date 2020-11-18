import { User } from './../../model/User';
import { compare } from './../../services/hashManager';
import selectUserByEmail from '../../data/user/selectUserByEmail';
import { generateToken } from '../../services/authenticator';

export const loginBusiness =  async (input: any): Promise<any> => {
        try {
            let message = "Success!"
            
            const user: User = await selectUserByEmail(input.email)
      
            if (!input.email || !input.password) {
               message = '"email" and "password" must be provided'
               throw new Error(message)
            }
      
            const passwordIsCorrect: boolean = await compare(input.password, user.password)
      
            if (!passwordIsCorrect) {
               message = "Invalid credentials"
               throw new Error(message)
            }
      
            const token: string = generateToken({
               id: user.id
            })

            return ({
                message, 
                token
            })
      
           
         } catch (error) {
            let message = error.sqlMessage || error.message
            return message
         }
      }