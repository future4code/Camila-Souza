import { hash } from './../../services/hashManager';
import { generateId } from '../../services/idGenerator';
import { CreateUserInput } from './../../model/User';
import { generateToken } from '../../services/authenticator';
import insertUser from '../../data/user/insertUser';

export const createUserBusiness =  async (input: CreateUserInput): Promise<string> =>{

    try {
    let message = "Success!"

    if (!input.name || !input.email || !input.password) {
    //    res.statusCode = 406
       message = '"name", "email" and "password" must be provided'
       throw new Error(message)
    }

    const id: string = generateId()

    const cypherPassword = await hash(input.password);

    await insertUser(
        id,
        input.name,
        input.email,
        cypherPassword
    )

    const token: string = generateToken({ id })

    return token;
    // res.status(201).send({ message, token })

 } catch (error) {
    // res.statusCode = 400
    let message = error.sqlMessage || error.message
    return message;
    // res.send({ message })
 }
}