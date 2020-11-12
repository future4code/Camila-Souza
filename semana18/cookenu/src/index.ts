import express, { Express } from 'express';
import cors from 'cors';
import { Server } from 'http';
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import login from './endpoints/login';
import getUserById from './endpoints/getUserById';

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/:id", getUserById)

const server: Server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });