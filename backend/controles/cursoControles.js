const Curso = require('../modelos/curso')
const mongoose = require('mongoose')

//  1 Obtener todos los cursos ----------
const verCursos = async (req, res) => {
    const cursos = await Curso.find({}).sort({createdAt: -1})

    res.status(200).json(cursos)
    }

//  2 Obtener un curso-------------------
const verCurso = async (req,res) => {
    const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No existe ese curso errorid 1'})
        }

    const curso = await Curso.findById(id)
    if (!curso){
        return res.status(404).json({error: 'No existe ese curso errorid 2'})
    }

    res.status(200).json(curso)
}

//  3 Crear un nuevo curso---------------
const crearCurso = async (req, res) => {
    const{titulo, costo, calificacion, descripcion} = req.body

    try{
        const curso = await Curso.create({titulo, costo, calificacion, descripcion})
        res.status(200).json(curso)
    } catch(error){
        res.status(400).json({error: error.message})
    }

}
//  4 Borrar un curso--------------------
const borrarcurso= async (req, res) => {
    const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No existe ese curso errorid 3'})
        }

    const curso = await Curso.findOneAndDelete({_id: id})

    if (!curso){
        return res.status(404).json({error: 'No existe ese curso errorid 4'})
    }

    res.status(200).json(curso)
}

//  5 Actualizar un curso----------------
const actualizarCurso = async (req, res) => {
    const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No existe ese curso errorid 5'})
        }

        const curso = await Curso.findOneAndUpdate({_id: id}, {
            ...req.body
        })

        if (!curso){
            return res.status(404).json({error: 'No existe ese curso errorid 6'})
        }
        res.status(200).json(curso)

}


//Exportar funciones y mandarlas a cursos.js
module.exports = {
verCursos,
verCurso,
crearCurso,
borrarcurso,
actualizarCurso
}