import { Request, Response } from "express";
import selectFeed from "../data/selectFeed";
import { getTokenData } from "../services/authenticator";

export default async function getFeed(
    req:Request,
    res:Response
    ) {
    
    const token = req.headers.authorization as string
    const auth = getTokenData(token)
    const feed = await selectFeed(auth.id)
    let message = "Success!"

    try {
        if(!auth){
            res.statusCode = 401
            message = "Unauthorized"
            throw new Error(message)
        }
        if(!feed){
            res.statusCode = 406
            message = "Feed not found"
            throw new Error(message)
        }

            res
            .status(200)
            .send({feed})
    
        } catch (error) {
            res
          .status(400)
          .send({
            message: error.message || error.sqlMessage,
            auth: req.headers.auth
            })
        }
    
}