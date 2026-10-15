const Estudante = require('../models/Estudante');
const EstudanteRepository = require('../repositories/EstudanteRepository');


class EstudanteController {
    criarEstudante (req, res) {
        try {
            const { nome, matricula} = req.body;
            const novoEstudante = new Estudante(nome, matricula);
            EstudanteRepository.salvar(novoEstudante);

            return res.status(201).json(novoEstudante);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar estudante' });
        }

    }
    
    ObterMediaEstudante(req, res) {
    const {matrícula}= req.paramas;
} 
   
}
