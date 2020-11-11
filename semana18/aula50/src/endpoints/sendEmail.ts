import { Response } from 'express';
import { Request } from 'express';
import { writeEmail } from '../services/mailer';

export async function sendEmail(
    req:Request,
    res:Response
    ) {
    try {
        await writeEmail(
            "Camila Souza <camila@labenu.com>",
            "t7w3z3r9v8x1e4c9@labenualunos.slack.com",
            "Semana 18 - Aula 52",
            "Resposta do desafio",
            "<h3>Semana 18 - Aula 52</h3><br><p>Para fazer o desafio, usei o <strong>mailtrap.io</strong> e o <strong>nodemailer</strong>.</p><br><p>Primeiro, coloquei os detalhes do mailtrap na pasta services, usando o SMTPTransport do nodemailer;</p><br><p>Em seguida, fiz a função writeEmail com os parâmetros necessários e o mailContent, usando o Mail do nodemailer;</p><br><p>Finalmente, coloquei o mailContent na função do transporter.sendMail.</p><br><p>Após a criação dos 'managers' no mailer.ts, criei a função sendEmail na pasta de endpoints, chamando a função writeEmail, onde escrevi esse e-mail.</p><br><h5>Camila Souza - Jackson</h5>"
        )

        res
        .send({message: "E-mail enviado com sucesso"})
        .status(200)

    } catch (error) {
        res
        .send(error)
        .send({message: "Vixi! Não rolou"})
    }
}