import { CreateUserInput } from '../../model/User';
import { createUserBusiness } from '../../business/user/createUserBusiness';
import { Request, Response } from "express";

export default async function signup(
    req: Request,
    res: Response
) {
    try {

        const input: CreateUserInput = { 
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password }

        const token = await createUserBusiness(input);

        res
        .status(201)
        .send({
            message: "Usuário criado",
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }}
