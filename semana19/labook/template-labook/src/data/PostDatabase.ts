import { Post } from './../model/Post';
import BaseDatabase from './BaseDatabase';

class PostDatabase extends BaseDatabase {
  
    private static tableName: string = "labook_posts"

    public getTableName = (): string => PostDatabase.tableName

    public async createPost(
        post: Post
    ) {

        try {
            await BaseDatabase.connection
            .insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                created_at: post.getCreatedAt(),
                author_id: post.getAuthorId()
            })
            .into(PostDatabase.tableName)
        } catch (error) {
            throw new Error("Database error: " + error.sqlMessage)
        }
    }

    public async getPostById(
        id: string
    ): Promise<Post> {
        try {
            const output = await BaseDatabase.connection
            .select("*")
            .where({ id })
            .from(PostDatabase.tableName)
           
            return new Post (
                output[0].id,
                output[0].photo,
                output[0].description,
                output[0].type,
                output[0].createAt,
                output[0].authorid
                )
        } catch (error) {
            throw new Error("Database error: " + error.sqlMessage)
        }
    }
}

export default new PostDatabase()