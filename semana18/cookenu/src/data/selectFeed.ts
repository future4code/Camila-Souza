import { tableUsers, tableFollow, tableRecipes } from '../constants/tables';
import { connection } from '../constants/connection';

export default async function selectFeed(
    id:string
    ): Promise<any>{
        const feed = await connection.raw(`
            SELECT r.id, title, description, created_at, u.id, u.name
            FROM ${tableRecipes} AS r
            JOIN ${tableFollow} AS f
            ON r.user_id = f.following_id
            JOIN ${tableUsers} AS u
            ON f.following_id = u.id
            WHERE f.followee_id = "${id}";
        `) 
        console.log(feed)
        return feed[0]
        
    } 