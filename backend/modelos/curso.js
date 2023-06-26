const mongoose = require('mongoose')

//Aqui vamos a crear el esquema de la  bd acerca de los cursos, es decir, lo
//que vamos a guardar
const Schema = mongoose.Schema
const cursoSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    calificacion: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Curso',cursoSchema)
