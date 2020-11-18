import { tableRecipes } from './../constants/tables';
import { Recipe } from './../types/recipe';
import { connection } from '../constants/connection';


export default async function insertRecipe(
    recipe: Recipe
    ): Promise<void> {
    const { id, user_id, title, description, created_at } = recipe

    await connection
        .insert({
            id,
            user_id,
            title,
            description,
            created_at
        })
        .into(tableRecipes);
};