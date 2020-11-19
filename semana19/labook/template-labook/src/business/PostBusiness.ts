import { AuthenticationData } from './../model/User';
import Authenticator from '../services/authenticator';
import IdGenerator from '../services/idGenerator';
import { CreatePostInput, GetPostByIdInput, Post } from './../model/Post';
import moment from "moment";
import postDatabase from '../data/PostDatabase';

class PostBusiness {
    public async createPost(
        input: CreatePostInput
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
        const tokenData: AuthenticationData = Authenticator.getTokenData(input.token)
        const author_id: string = tokenData.id

        if(
            !tokenData
        ){
            message = 'Unauthorized';
            throw new Error(message);
        }
        const createdAtMoment = moment().format("YYYY-MM-DD")

        const newPost: Post = new Post(
            id,
            input.photo,
            input.description,
            input.type,
            createdAtMoment,
            author_id
        )
            console.log(newPost)
        await postDatabase.createPost(newPost)

        return message

        } catch (error) {
            let message = error.sqlMessage || error.message
            return message; 
        }
    }
    public async getPostById(input: GetPostByIdInput): Promise<Post>{
        try {
            if(
                !input.id
                ){
                throw new Error('"Id" must be provided');
             }
            
            Authenticator.getTokenData(input.token)

            const post: Post = await postDatabase.getPostById(input.id)
    
            return post

        } catch (error) {
            throw new Error(error.message)
        }
    }
}
export default new PostBusiness()