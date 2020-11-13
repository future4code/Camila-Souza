import { tableRecipes } from './../constants/tables';
import { connection } from '../constants/connection';

export default async function deleteRecipeById(
    id:string
    ): Promise<void>{
        await connection(tableRecipes)
        .delete()
            .where({
                "id": id
            })  
}