import { tableFollow } from './../constants/tables';
import { connection } from './../constants/connection';

export default async function followUserById(
    followee_id: string,
    following_id: string
    ): Promise<void> {
            await connection(tableFollow)
            .insert({
                "followee_id": followee_id,
                "following_id": following_id
            })  
    }