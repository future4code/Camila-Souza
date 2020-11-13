import moment from "moment";
import { Recipe } from './../types/recipe';
import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import { getTokenData } from "../services/authenticator";
import generateId from "../services/generateId";

export default async function createRecipe(
    req: Request,
    res: Response
    ) {
    const token = req.headers.authorization as string
    const auth = getTokenData(token)
    
    const { title, description }: Recipe = req.body
    let message = "Recipe created"

    try {
        if(!auth){
            res.statusCode = 401
            message = "Unauthorized"
            throw new Error(message)
        }
        if(!title){
            res.statusCode = 406
            message = "Insert a title, please"
            throw new Error(message)
        }
        if(!description){
            res.statusCode = 406
            message = "Insert a description, please"
            throw new Error(message)
        }
        const id: string = generateId()
        const created_at = moment().format("DD/MM/YYYY")

        await insertRecipe({
            id,
            user_id: auth.id,
            title,
            description,
            created_at
    })

        res
        .status(200)
        .send({
            message
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