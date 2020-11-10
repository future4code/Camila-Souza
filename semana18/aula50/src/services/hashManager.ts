import * as bcrypt from "bcryptjs";

export async function generateHash(
    plainText: string
    ): Promise<string> {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = await bcrypt.genSalt(rounds)

    return bcrypt.hash(plainText, salt)
}

export async function compare(
    plainText: string,
    cypherText: string
    ): Promise<boolean> {
    return bcrypt.compare(plainText, cypherText)
}