var mongoose = require('mongoose');
var AlunosSchema = mongoose.Schema(
    {
        nome: {type: String, required: true},
        curso: {type: String, required: true},
        ira: {type: Number, required: true},
    }
)
var AlunosModel = mongoose.model('alunos', AlunosSchema);
module.exports = AlunosModel;
