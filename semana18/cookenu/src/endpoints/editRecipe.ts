import { Recipe } from './../types/recipe';
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import updateRecipe from '../data/updateRecipe';

export default async function editRecipe(
    req:Request,
    res:Response
    ){
        const token = req.headers.authorization as string
        const auth = getTokenData(token)
        
        const { title, description }: Recipe = req.body

        let message = "Recipe updated"
    
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

            const id = req.params.id

            await updateRecipe(
                id,
                title,
                description
        )
    
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