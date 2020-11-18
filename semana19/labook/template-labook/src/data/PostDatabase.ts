import { connection } from './connection';
import { Post } from './../model/Post';

class PostDatabase {
    private tableName: string = "labook_posts"

    public getTableName = (): string => this.tableName

    public async createPost(
        newPost: Post
    ) {

        try {
            await connection
            .insert({
                id: newPost.getId(),
                photo: newPost.getPhoto(),
                description: newPost.getDescription(),
                type: newPost.getType(),
                createAt: newPost.getCreateAt(),
                authorId: newPost.getAuthorId()
            })
            .into(this.tableName)
        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }

    public async getPostById(
        id: string
    ): Promise<Post> {
        try {
            const output = await connection
            .select("*")
            .where({ id })
            .from(this.tableName)
           
            return new Post (
                output[0].id,
                output[0].photo,
                output[0].description,
                output[0].type,
                output[0].createAt,
                output[0].authorid)
                 
        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }
}

export default new PostDatabase()