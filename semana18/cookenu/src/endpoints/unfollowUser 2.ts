import { User } from '../types/user';
import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";
import unfollowUserById from '../data/unfollowUserById';


export default async function unfollowUser(
    req:Request,
    res:Response
    ){
    const token = req.headers.authorization as string
    const auth = getTokenData(token)

    let message = "User unfollowed"

    try {
        const id: string = req.body.id
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
        const followee_id: string = auth.id
        const following_id: string = id

        await unfollowUserById(
            followee_id, 
            following_id
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