const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res) =>{
    res.status(200).json({
        name: "agaile-node-nodemon-dev-sav-npm-balagal"
    })
});

app.get("/Student",(req,res)=>{
    res.status(200).json([{
        name: "Tiya",
        age: "22",
        city: "Banglore"
    },
    {
        name: "Riya",
        age: 23,
        city: "Mumbai"
    }
])
});

app.listen(3000);