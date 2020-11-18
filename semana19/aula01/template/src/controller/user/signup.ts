import { Request, Response } from "express";
import { createUserBusiness } from './../../business/user/createUserBusiness';
export default async function signup(
    req: Request, 
    res: Response
    ) {
    try {
        const input = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }

        const token = await createUserBusiness(input);

        res
            .status(200)
            .send({ 
                message:"Usuário criado!",
                token 
        });

    } catch (error) {
        res
            .status(400)
            .send({ error: error.message });
    }

    // await destroyConnection();
}