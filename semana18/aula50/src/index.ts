import express, { Express } from 'express';
import cors from 'cors';
import { Server } from 'http';
import { AddressInfo } from "net";
import postUserSignUp from './endpoints/postUserSignUp';
import postUserLogin from './endpoints/postUserLogin';

const app: Express = express()
app.use(express.json())
app.use(cors())

//----------

app.post("/signup", postUserSignUp)
app.post("/login", postUserLogin)
//----------
const server: Server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });