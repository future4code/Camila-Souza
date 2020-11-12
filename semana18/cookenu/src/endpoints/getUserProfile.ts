import { User } from './../types/user';
import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";


export default async function getUserProfile(
    req:Request,
    res:Response
    ){
    const token = req.headers.authorization as string
    const auth = getTokenData(token)

    let message = "Profile found"

    try {
        if(!auth){
            res.statusCode = 401
            message = "Unauthorized"
            throw new Error(message)
        }
        
        const { id, name, email }: User = await selectUserById(auth.id)

        res
        .status(200)
        .send({
            message,
            id,
            name,
            email
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