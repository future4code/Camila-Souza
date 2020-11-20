import { CustomError } from './../services/customError';
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
            throw new CustomError(406, "'photo', 'description' and 'type' must be provided")
        }
        const id: string = IdGenerator.generateId()
        const tokenData: AuthenticationData = Authenticator.getTokenData(input.token)
        const author_id: string = tokenData.id as string

        if(
            !tokenData
        ){
            throw new CustomError(401, "Unauthorized")
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
            throw new CustomError(400, error.message) 
        }
    }
//--------------------------------------
    public async getPostById(input: GetPostByIdInput): Promise<Post>{
        try {
            if(
                !input.id
                ){
                    throw new CustomError(406, "'id' must be provided")
             }
            
            Authenticator.getTokenData(input.token)

            const post: Post = await postDatabase.getPostById(input.id)
    
            return post

        } catch (error) {
            throw new CustomError(400, error.message)
        }
    }
//--------------------------------------
}
export default new PostBusiness()