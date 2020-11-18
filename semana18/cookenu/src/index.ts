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
import followUser from './endpoints/followUser';
import unfollowUser from './endpoints/unfollowUser';
import editRecipe from './endpoints/editRecipe';
import deleteRecipe from './endpoints/deleteRecipe';
import deleteUser from './endpoints/deleteUser';
import getFeed from './endpoints/getFeed';

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/signup", createUser)
app.post("/login", login)
app.post("/user/password/reset", resetPassword)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)

app.get("/user/profile", getUserProfile)
app.get("/user/feed", getFeed)
app.get("/user/:id", getUserById)
app.delete("/user/:id", deleteUser)

app.post("/recipe", createRecipe)
app.post("/recipe/:id", editRecipe)
app.get("/recipe/:id", getRecipeById)
app.delete("/recipe/:id", deleteRecipe)

const server: Server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });