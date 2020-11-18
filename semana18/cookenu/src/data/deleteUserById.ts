import { tableUsers, tableRecipes, tableFollow } from '../constants/tables';
import { connection } from '../constants/connection';

export default async function deleteUserById(
    id:string
    ): Promise<void>{
        await connection(tableRecipes) 
        .delete()
            .where({
                "user_id": id
            })
        await connection(tableFollow) 
            .delete()
            .where({
                "followee_id": id
            })
        await connection(tableFollow) 
            .delete()
            .where({
                "following_id": id
            })
        await connection(tableUsers)
            .delete()
            .where({
                "id": id
            }) 
}