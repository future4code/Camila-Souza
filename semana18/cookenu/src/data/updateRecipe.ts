import { tableRecipes } from './../constants/tables';
import { connection } from './../constants/connection';

export default async function updateRecipe(
    id:string,
    title:string,
    description:string
    ) {
    await connection(tableRecipes)
    .update({
        title, 
        description})
    .where({ id })
}