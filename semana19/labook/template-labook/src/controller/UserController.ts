import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness";
import { CreateUserInput, User } from "../model/User"



class UserController {
    public async signup(
       req: Request,
       res: Response
    ){
        try {
    
            const input: CreateUserInput = { 
                name: req.body.name, 
                email: req.body.email, 
                password: req.body.password }
    
            const token = await UserBusiness.signup(input);
    
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

        public async login(
            req:Request,
            res:Response
            ): Promise<void> {
                try {
                    const loginInput ={ 
                        email: req.body.name,
                        password: req.body.password }
              
                    const token = await UserBusiness.login(loginInput)
                    
                    res
                    .status(200)
                    .send({ token })
              
                 } catch (error) {
                    res
                    .status(400)
                    .send({ message: error.message })
                 }
              }
    }