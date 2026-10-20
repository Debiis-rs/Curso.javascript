require("dotenv").config();

const db = require("./db");
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Bem vindo ao IFB!").status(200);

});








app.listen(port,()=>{
    console.log(`Aplicação rodando na porta ${port}!`);
});

