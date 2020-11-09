import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../constants/types";


const expiresIn = "10min";

export function generateToken(
    payload: AuthenticationData
): string {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
};

export function getTokenData(
    token: string
): AuthenticationData {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
}