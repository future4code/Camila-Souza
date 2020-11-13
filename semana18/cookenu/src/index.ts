import express, { Express } from 'express';
import cors from 'cors';
import { Server } from 'http';
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import login from './endpoints/login';
import getUserById from './endpoints/getUserById';
import getUserProfile from './endpoints/getUserProfile';
import createRecipe from './endpoints/createRecipe';
import getRecipeById from './endpoints/getRecipeById';
import { resetPassword } from './endpoints/resetPassword';

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/signup", createUser)
app.post("/login", login)
app.post("/user/password/reset", resetPassword)

app.get("/user/profile", getUserProfile)
app.get("/user/:id", getUserById)

app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)

const server: Server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });