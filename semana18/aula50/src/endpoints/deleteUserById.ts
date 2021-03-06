import { Request, Response } from "express";
import deleteUser from "../data/deleteUser";
import { getTokenData } from "../services/authenticator";

export default async function deletUserById(
   req: Request,
   res: Response
) {
   try {
    
    const token = req.headers.authorization as string;

    const auth = getTokenData(token);

    if (auth.role !== "admin") {
       res.statusCode = 401
       throw new Error("Unauthorized")
    }

    const id = req.params.id;

    const user = await deleteUser(id)

    res.statusMessage = "User deleted"

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}