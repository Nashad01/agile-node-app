const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        name:"agile-node-app-balagal-ulabe-kamalehi"
    })
})

app.listen(3000,() =>{
    
})