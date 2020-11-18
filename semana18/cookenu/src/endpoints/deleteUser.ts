import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import deleteUserById from '../data/deleteUserById';


export default async function deleteUser(
    req:Request,
    res:Response
    ){
    const token = req.headers.authorization as string
    const auth = getTokenData(token)

    let message = "User removed"

    try {
        const id: string = req.params.id

        if(!auth){
            res.statusCode = 401
            message = "Session expired"
            throw new Error(message)
        }
        if(auth.role !== 'admin' && !auth.id) {
            res.statusCode = 401
            throw new Error ('Unauthorized')
         }
        if(!id){
            res.statusCode = 406
            message = "User not found"
            throw new Error(message)
        }

        await deleteUserById(
            id
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