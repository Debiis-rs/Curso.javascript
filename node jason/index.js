const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const usuarios = [{
    nome: 'Emilly',
    idade: 20
}]

app.get('/', (req, res) => {
    res.send('Bem Vindo a Home.')
})

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.json(usuarios)
})

app.put('/usuarios/:id', (req, res) => {
    res.json(usuarios)
})

app.delete('/usuarios/:id', (req, res) => {
    usuarios.splice(req.params.id,1)
    res.json(usuarios)
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}!!!!`)
})