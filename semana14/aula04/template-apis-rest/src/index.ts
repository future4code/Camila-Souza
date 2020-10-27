//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// Exercício 1
// a. GET
// b. users

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// Exercício 3

// app.get("/users/query", (req: Request, res: Response): void =>{

//     const name = req.query.name;
//     const age = Number(req.query.age);

//     console.log("o nome que chegou: ", name);
//     console.log("a idade que chegou: ", age);

//     try{
//         const user = users.find((u)=> u.name === name || u.age === age)
//         if(!user){
//             throw new Error();
//         }
//         res.status(200).send(user);
//     }catch(error){
//         res.status(400).send({
//             message: "Error searching for users"
//         });
//     }
// });

// Exercício 2
// a. O type está descrito na entidade e é selecionado com o uso do filter

app.get("/users/:type", (req: Request, res: Response): void =>{

    try{
        // b.
        // if((req.params.type!=="ADMIN") && (req.params.type!=="NORMAL"))
        if(!(req.params.type.toUpperCase() in UserType))
        {
            throw new Error();
        }
        const usersByType = users.filter(
            (user)=>user.type === req.params.type.toUpperCase()
        )
      
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Something went wrong! Please, enter the type again!"
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
