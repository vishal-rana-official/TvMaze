import express from 'express';
import cors from 'cors'
import router from './router/route.js';
import connection from './database/connection.js';

const app = express();
const port = 8090;

app.use(cors());
app.use(express.json());

connection();

app.get('/',(req,res)=>{
    return res.status(200).json("home get request") 
})

app.use('/api',router)

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})


