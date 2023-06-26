const  express = require('express')
//Traer de controles
const {
    verCursos,
    verCurso,
    crearCurso,
    borrarcurso,
    actualizarCurso
} = require('../controles/cursoControles')

//app de express
const router = express.Router()
//RUTA NUEVA AGARRAR ABAJO
// router.get('/',()=>{})




//esta ruta es para todos los cursos                   111111
router.get('/', verCursos)

//GET solo un curso                                    222222
router.get('/:id', verCurso)

// POST un nuevo curso                                 333333
router.post('/', crearCurso)

// DELETE un curso                                     44444
router.delete('/:id', borrarcurso)

// ACTUALIZAR CURSO                                    55555
router.patch('/:id', actualizarCurso)


module.exports = router