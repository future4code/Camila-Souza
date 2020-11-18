import { tableRecipes } from './../constants/tables';
import { Recipe } from './../types/recipe';
import { connection } from '../constants/connection';

export default async function selectRecipeById(
    id:string
    ): Promise<Recipe> {
    try {
        const selectRecipe = await connection(tableRecipes)
        .select("*")
        .where({ id })

        return selectRecipe[0]
    } catch (error) {
        throw new Error(error.message)
    }
}