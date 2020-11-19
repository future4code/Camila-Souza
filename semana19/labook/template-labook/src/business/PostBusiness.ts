import { AuthenticationData, User } from './../model/User';
import Authenticator from '../services/authenticator';
import IdGenerator from '../services/idGenerator';
import { CreatePostInput, GetPostByIdInput, Post } from './../model/Post';
import moment from "moment";
import PostDatabase from '../data/PostDatabase';

class PostBusiness {
    public async createPost(
        input: CreatePostInput,
        output: User,
        ): Promise<string> {
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
        const id: string = IdGenerator.generateId()
        const token: string = Authenticator.generateToken({
            id: output.getId()
        }) as string
        const author_id = output.getId() as string
        const tokenData: AuthenticationData = Authenticator.getTokenData(token)
        
        if(
            !tokenData
        ){
            message = 'Unauthorized';
            throw new Error(message);
        }
        const createdAtMoment = moment().format("DD/MM/YYYY")

        const newPost: Post = new Post(
            id,
            input.photo,
            input.description,
            input.type,
            createdAtMoment,
            author_id
        )

        await PostDatabase.createPost(newPost)

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