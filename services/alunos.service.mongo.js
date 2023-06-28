const AlunosModel = require('../models/alunos.models.mongo');

class AlunosService {
    static list(req,res) {
        AlunosModel.find()
        .then(
            (alunos)=>{
                res.status(201).json(alunos);
            }
        )
    }

    static register(req,res) {
        AlunosModel.create(req.body)
        .then(
            (alunos)=>{
                res.status(201).json(alunos);
            }
        )
    }

    static retrieve(req,res) {
        AlunosModel.findById(req.params.id)
        .then(
            (alunos)=>{
                res.status(201).json(alunos);
            }
        )
    }

    static update(req,res) {
        AlunosModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(
            (alunos)=>{
                res.status(201).json(alunos);
            }
        )
    }

    static delete(req,res) {
        AlunosModel.findByIdAndRemove(req.params.id)
        .then(
            (alunos)=>{
                res.status(201).json(alunos);
            }
        )
    }
}

module.exports = AlunosService;