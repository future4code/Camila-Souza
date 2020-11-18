import { generateId } from '../../services/idGenerator';
import { AuthenticationData } from '../../model/User';
import { NewPost } from '../../model/Post';
import { Request, Response } from "express";
import { getTokenData } from '../../services/authenticator';
import { createPostBusiness } from '../../business/post/createPostBusiness';

export default async function newPost(
    req: Request,
    res: Response
) {
    const input: NewPost = { 
        photo: req.body.photo, 
        description: req.body.description, 
        type: req.body.type }
    
    const token: string = req.headers.authorization as string
    const tokenData: AuthenticationData = getTokenData(token)   
    // const id: string = generateId()
    
    // const postInput = {
    //     id,
    //     photo,
    //     description,
    //     type,
    //     author_id: tokenData.id
    // }
    try {
        res
        .status(201)
        .send({
            message: "Post criado"
        })
    } catch (error) {
        res
        .status(400)
        .send({
            message: error.message || error.sqlMessage
        })
    }}
