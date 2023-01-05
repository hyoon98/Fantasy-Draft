import express, {Express} from 'express';
import dotenv from "dotenv";
import cors from 'cors'
import mongoose from 'mongoose'
import {User} from './models/User'
import bcrypt from 'bcrypt'

dotenv.config()

const port=8000;
const app: Express=express();

const dbURI='mongodb+srv://hyoon1998:Vw8et6w5u95@cluster0.ya0e4r2.mongodb.net/fantasy-draft?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result)=>app.listen(port,()=>{
    console.log("listening on port "+port);
}))
    .catch((error)=>console.log(error));

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Test");
});
app.get("/add-user",(req,res)=>{
    const user=new User({
        name:'test'
    })

    user.save().then((result)=>{
        res.send(result)
    })
        .catch((error)=>console.log(error))
})

app.get("/hi",(req,res)=>{
    res.send("Test1");
});

app.post('/register',(req,res)=>{
    try{
        const hashedPassword= await bcrypt.hash(req.body.password, 10);
    } catch {

    }
})
    