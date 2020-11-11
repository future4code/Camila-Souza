import express, { Express } from 'express';
import cors from 'cors';
import { Server } from 'http';
import { AddressInfo } from "net";
import postUserSignUp from './endpoints/postUserSignUp';
import postUserLogin from './endpoints/postUserLogin';
import getUserById from './endpoints/getUserById';
import deletUserById from './endpoints/deleteUserById';
import { sendEmail } from './endpoints/sendEmail';

const app: Express = express()
app.use(express.json())
app.use(cors())

//----------

app.post("/signup", postUserSignUp)
app.post("/login", postUserLogin)
app.post("/email/send", sendEmail)
app.get("/user/:id", getUserById)
app.delete("/user/:id", deletUserById)
//----------
const server: Server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });