const express = require('express');
const app = express();
const PORT =3001;
const {Estudante} = require ('./models');
app.use(express.json());

//implementando o CRUD com sequelize
 app.get('/Estudantes',async(req,res)=>{
  try{
    const estudantes= await Estudante.findAll();
    res.status(200).json(estudantes);
  }catch(error){
    res.status(500).json({mensagem:'Erro ao buscar estudantes.'});
  }
});
//[READ]buscar um estudante por id (GET/estudantes/:id)
app.get('/estudantes/:id',async (req,res)=>{

    try{
        const estudante = await Estudante.findByPk(req.params.id);
        if(!estudante){
            return res.status(404).json({mensagem:'Estudante não encontrado.'});
        }
        res.status(200).json(estudante);
    } catch(error){
        res.status(500).json({mensagem:'Erro ao buscar estudantes.'});
    }
});

app.post('/estudantes', async (req,res)=>{

    try{
        const novoEstudante = await Estudante.create(req.body);
        res.status(201).json(novoEstudante);
    } catch(error){
        res.status(400).json({mensagem:'Erro ao criar estudante.', erro: error.mensage});
    }
});

app.put('/estudantes/:id', async (req,res)=>{
    try{
        const estudante = await Estudante.findByPk(req.params.id);
        if(!estudante){
             return res.status(404).json({mensagem:'Estudante não encontrado.'});
        }
      await estudante.update(req.body);
      res.status(200).json(estudante);
    } catch(error){
        res.status(400).json({mensagem:'Erro ao atualizar estudante.', erro: error.mensage});
    }
});

app.delete('/estudantes/:id', async (req,res)=>{
    try{
        const estudante = await Estudante.findByPk(req.params.id);
        if(!estudante){
             return res.status(404).json({mensagem:'Estudante não encontrado.'});
        }
      await estudante.destroy(req.body);
      res.status(204).send();
    } catch(error){
        res.status(500).json({mensagem:'Erro ao deletar estudante.'});
    }
});










app.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}!`);
});