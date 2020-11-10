import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
    
    const token = req.headers.authorization as string;

    const auth = getTokenData(token);

    if (auth.role !== "normal") {
       res.statusCode = 401
       throw new Error("Unalthorized")
    }

    const user = await selectUserById(auth.id)

      if (!user) {
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         email: user.email,
         role: auth.role
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}