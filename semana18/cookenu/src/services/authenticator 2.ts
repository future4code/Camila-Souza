import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/authenticationData";

const expiresIn = "30min";

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
};