import express, { Express, Request, Response } from "express"
import cors from "cors"
import { Server } from "http"
import { postRouter } from './routes/postRoutes';
import { userRouter } from './routes/userRoutes';

/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())
/**************************** ENDPOINTS ******************************/
app.use("/user", userRouter);
app.use("/post", postRouter);
/**************************** SERVER INIT ******************************/
const server: Server = app.listen(3003, ()=>{
   if (server) {
       console.log("Server running on port 3003")
   } else {
       console.error("Server faild to start")
   }
})
