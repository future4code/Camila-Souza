import { CreatePostInput, GetPostByIdInput } from './../model/Post';
import { Request, Response } from "express";
import PostDatabase from '../data/PostDatabase';
import { Post } from "../model/Post"

class PostController{
    public async createPost(
        req:Request,
        res:Response
    ){
        try {
            const input: CreatePostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }
            if(!input){
                throw new Error("'Photo', 'description' and 'type' must be fill")
            }
           
            res
            .status(200)
        } catch (error) {
            res
            .status(400)
        }
    }
    public async getPostById(
        req:Request,
        res:Response
    ){
        try {
            const output: Post = await PostDatabase.getPostById(req.params.id)

            if(!output){
                throw new Error("Post not found")
            }
           
            res
            .status(200)
            .send({
                id: output.getId(),
                photo: output.getPhoto(),
                description: output.getDescription(),
                type: output.getType(),
                createdAt: output.getCreateAt(),
                authorId: output.getAuthorId()
            })
        } catch (error) {
            res
            .status(400)
        }
    }
}
export default new PostController()