import express, { Express } from 'express';
import cors from 'cors';
import { Server } from 'http';
import { AddressInfo } from "net";
import postUser from './endpoints/postUser';

const app: Express = express()
app.use(express.json())
app.use(cors())

//----------

app.post("/signup", postUser)

//----------
const server: Server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });