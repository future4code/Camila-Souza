import { AuthenticationData } from './../model/User';
import Authenticator from '../services/authenticator';
import idGenerator from '../services/idGenerator';
import { CreatePostInput, GetPostByIdInput, postTypeToString } from './../model/Post';
import moment from "moment";
import PostDatabase from '../data/PostDatabase';

class PostBusiness {
    public async createPost(input: CreatePostInput): Promise<string> {
        let message = "Success!"
        try {
            if(
                !input.photo || 
                !input.description || 
                !input.type
            ){
            message = '"name", "email" and "password" must be provided';
            throw new Error(message);
        }
        
        const id: string = idGenerator.generateId() as string
        const token: string = Authenticator.generateToken({id}) as string
        const tokenData: AuthenticationData = Authenticator.getTokenData(token)
        
        if(
            !tokenData
        ){
            message = 'Unauthorized';
            throw new Error(message);
        }
        const createdAtMoment = moment().format("DD/MM/YYYY")

        await PostDatabase.createPost({
            id,
            photo: input.photo,
            description: input.description,
            type: input.type,
            createdAt: createdAtMoment,
            authorId: token.id

        })

        return message

        } catch (error) {
            let message = error.sqlMessage || error.message
            return message; 
        }
    }
    public async getPostById(input: GetPostByIdInput): Promise<string>{
        let message = "Success!"
        try {
            if(
                !input.id
                ){
                message = '"Id" must be provided';
                throw new Error(message);
             }
            const id = input.id
            const token: string = Authenticator.generateToken({id}) as string
            const tokenData: AuthenticationData = Authenticator.getTokenData(token)
            if(
                !tokenData
            ){
                message = 'Unauthorized';
                throw new Error(message);
            }
            return message

        } catch (error) {
            let message = error.sqlMessage || error.message
            return message; 
        }
    }
}
export default new PostBusiness()