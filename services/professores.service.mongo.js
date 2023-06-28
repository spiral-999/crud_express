const ProfessoresModel = require('../models/professores.models.mongo');

class ProfessoresService {
    static list(req,res) {
    ProfessoresModel.find()
        .then(
            (professores)=>{
                res.status(201).json(professores);
            }
        )
    }
    static register(req,res) {
        ProfessoresModel.create(req.body)
        .then(
            (professores)=>{
                res.status(201).json(professores);
            }
        )
    }
    static retrieve(req,res) {
        ProfessoresModel.findById(req.params.id)
        .then(
            (professores)=>{
                res.status(201).json(professores);
            }
        )
    }
    static update(req,res) {
        ProfessoresModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(
            (professores)=>{
                res.status(201).json(professores);
            }
        )
    }
    static delete(req,res) {
        ProfessoresModel.findByIdAndRemove(req.params.id)
        .then(
            (professores)=>{
                res.status(201).json(professores);
            }
        )
    }
}
module.exports = ProfessoresService;