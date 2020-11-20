import { compare } from './../../services/hashManager';
import { generateToken } from '../../services/authenticator';
import getUserByEmail from '../../data/user/getUserByEmail';

export const getUserByEmailBusiness = async(user:any): Promise<string> => {

    const userFromDB = await getUserByEmail(user.email);

    const hashCompare = await compare(user.password, userFromDB.getPassword());

    const accessToken = generateToken({ 
        id: userFromDB.getId()});

    if (!hashCompare) {
        throw new Error("Invalid Password!");
    }

    return accessToken;
}