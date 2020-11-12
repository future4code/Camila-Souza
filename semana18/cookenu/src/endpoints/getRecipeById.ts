import { Recipe } from './../types/recipe';
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import selectRecipeById from '../data/selectRecipeById';


export default async function getRecipeById(
    req:Request,
    res:Response
    ){
    const token = req.headers.authorization as string
    const auth = getTokenData(token)

    let message = "Recipe found"

    try {
        const id: string = req.params.id
        const recipe: Recipe = await selectRecipeById(id)

        if(!auth){
            res.statusCode = 401
            message = "Session expired"
            throw new Error(message)
        }
        if(!recipe){
            res.statusCode = 406
            message = "Recipe not found"
            throw new Error(message)
        }

        res
        .status(200)
        .send({
            message,
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            created_at: recipe.created_at
        })
    } catch (error) {
        
      res
      .status(400)
      .send({
        message: error.message || error.sqlMessage,
        auth: req.headers.auth
     })
    }
}