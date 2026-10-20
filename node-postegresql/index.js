//contruindo as rotas 
require("dotenv").config();

const db = require("./db");
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Bem vindo ao IFB!").status(200);

});

app.get("/alunos", async (req,res) => {
    const alunos= await db.selecionarAlunos();
    res.json(alunos).status(200);
});

app.get("/aluno/:ra", async (req,res) => {
    const aluno = await db.selecionarAluno(req.params.ra);
    res.json(aluno).status(200);
});

app.post("/alunos", async (req,res) => {
    await db.adicionarAluno(req.body);
    res.json(aluno).status(200);
});










app.listen(port,()=>{
    console.log(`Aplicação rodando na porta ${port}!`);
});

