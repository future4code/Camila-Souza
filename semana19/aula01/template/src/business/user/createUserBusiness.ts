import { hash } from './../../services/hashManager';
import { generateId } from './../../services/idGenerator';
import createUserData from "../../data/user/createUserData";
import { generateToken } from '../../services/authenticator';

export const createUserBusiness = async (input:any): Promise<string> => {

    try{

        if(
            !input.name || 
            !input.email || 
            !input.password || 
            !input.role
            ){
            throw new Error("Please fill all the fields");
        }

        if(input.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(input.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id: string = generateId();
        const hashPassword = await hash(input.password);
        await createUserData(
            id, 
            input.email, 
            input.name, 
            hashPassword, 
            input.role
        );
        const token: string = generateToken({
            id, 
            role: input.role
        });
        
        return token;

    }catch(error){
        if(error.code === 1048){
            throw new Error("Error creating input. Please check your system administrator.");
        }
    }
    return "";
}