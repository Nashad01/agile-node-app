const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        name:"agile-node-app-balagal-ulabe-kamalehi"
    })
})

app.get("/Student",(req,res)=>{
    res.status(200).json([
    {
        name: "Tushar",
        age: 23,
        city:"Mumbai"
    },
    {
        name: "Blodti",
        age: 32,
        city: "Chennai"
    }
])
})

app.listen(3000,() =>{
    console.log("soletsbegin something that never been begin");
    
})