const express = require ("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})

app.get("/about",(req,res)=>{
    res.send("welcome to about page")
})

app.get("/contact",(req,res)=>{
    res.end("welcome to contact page")
})

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000")
})