import { countries, country } from './countries';
import express, {Express, Request, Response} from "express";
import cors from "cors";

const app: Express = express()

app.use(express.json())
app.use(cors())

// app.get('/test/hello', (req: Request, res: Response) => {   
//     res.send(`Olá, mundo!`) 
// })

// app.get('/test/:number/:name', (req: Request, res: Response) => {   
//     res.send(`Oi ${req.params.name}! Seu número da sorte é ${Number(req.params.number) + 3}!`)
// })

app.get("/countries/all", (req: Request, res: Response)=>{
    const mappedCountries = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send(mappedCountries)
})

app.get("/countries/search", (req: Request, res: Response)=>{
    let searchedCountry: country[] = countries
    let errorCode: number = 401
    try{
        if(
            !req.query.name &&
            !req.query.capital &&
            !req.query.continent
        ){
            errorCode = 406
            throw new Error("Huston, we have a problem! Bad parameters!")
        }
        if(req.query.name){ 
            searchedCountry = searchedCountry.filter (
                country => country.name.includes(req.query.name as string) 
             )
        } 
        if(req.query.capital){
            searchedCountry = searchedCountry.filter (
               country => country.capital.includes(req.query.capital as string)
            )
        } 
        if(req.query.continent){
            searchedCountry = searchedCountry.filter (
                country => country.continent.includes(req.query.continent as string)
            )
            }
            
            res.status(200).send(searchedCountry)
    } catch{
        res.status(errorCode).end()
    }

})

app.get("/countries/:id", (req: Request, res: Response)=>{
    const choosedCountry: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (choosedCountry){
        res.status(200).send(choosedCountry)
    } else {
        res.status(404).send("Country not found")
    }
    
})

app.put("countries/edit/:id", (req: Request, res: Response)=>{


})

// app.delete("/countries/:id", (req: Request, res: Response)=>{
//     let errorCode: number = 401
//     try{
//         if(!req.headers.authorization){
//             throw new Error()
//         }
//         const countryIndex: number = countries.findIndex(
//             (country)=> country.id === Number(req.params.id)
//         )

//             if(countryIndex === -1){
//                 errorCode = 404
//                 throw new Error()
//             }
//         countries.splice(countryIndex, 1)
//         res.status(200).end()

//     } catch (error) {
//         res.status(errorCode).end()
//     }
    
// })

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003!")
})