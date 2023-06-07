const express = require('express');
const cors = require('cors');

const app = express();
const port = 8090;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    return res.status(200).json("home get request") 
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})


