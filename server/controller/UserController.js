import bcrypt from 'bcrypt';
import userModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';
import axios from 'axios'

export async function register(req, res){
    try {
        const { username, password, email } = req.body;
        const existingUser = await userModel.findOne({username});
        if(existingUser){
            return res.status(409).send({message: "user already exists! please provide a unique username"})
        }
        const existingEmail = await userModel.findOne({email})
        if(existingEmail){
            return res.status(409).send({message: "email already exists! Provide a new email"})
        }
        const newPassword = await bcrypt.hash(password,10)

        const newUser = {
            username,
            password:newPassword,
            email 
        }

        const user = new userModel(newUser)
        await user.save()
        res.status(201).send({message:"User registerd successfully", user })

    } catch (error) {
      return res.status(500).send({error})  
    }
}

export async function login(req, res){
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if(!user){
            return res.status(401).send({error: "Email does not exist"})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(401).send({error: 'password does not match'})
        }

        const token = jwt.sign({
            username: user.username
        },'secret',{expiresIn: '24h'})

        return res.status(200).send({ message: "login successfully", token})
        
        
    } catch (error) {
        return res.status(500).send({error})
    }
}

export async function search(req, res){
    const {title} = req.query;
    const token = req.headers.authorization;
    console.log(title, token);
    try {
        if(!token){
            return res.status(401).json({error: "jwt token is missing"})
        }
        jwt.verify(token,'secret',(err,decoded)=>{
            if(err){
                return res.status(401).json({ error: 'Invalid JWT token'})
            }
        })

        const url = `https://api.tvmaze.com/search/shows?q=${title}`;

        axios.get(url,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response=>{
            return res.status(200).json(response.data)
        })
        .catch((error) =>{
            return res.status(500).json({error: "Error fetching data from tv maze API"})
        })

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error"})
    }
}