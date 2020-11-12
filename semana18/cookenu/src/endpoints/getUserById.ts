import { User } from './../types/user';
import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";


export default async function getUserById(
    req:Request,
    res:Response
    ){
    const token = req.headers.authorization as string
    const auth = getTokenData(token)

    let message = "User found"

    try {
        const id: string = req.params.id
        const user: User = await selectUserById(id)

        if(!auth){
            res.statusCode = 401
            message = "Session expired"
            throw new Error(message)
        }
        if(!user){
            res.statusCode = 406
            message = "User not found"
            throw new Error(message)
        }

        res
        .status(200)
        .send({
            message,
            name: user.name
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