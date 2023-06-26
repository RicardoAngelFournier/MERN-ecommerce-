require('dotenv').config()

const  express = require('express')
const mongoose = require('mongoose')
const cursos = require('./rutas/cursos')

//app de express
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) =>{
console.log(req.path,req.method)
next()
})

//PARA PROBAR QUE ESTA FUNCIONANDO RUTA
//app.get('/', (req,res) => {
	//res.json({mssg: 'Bienvenido a la app, funcionando'})
//})

app.use('/api/cursos',cursos)

//CONEXION A BASE DE DATOS
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//LEER IMPOIRTANTE:
//CUANDO CORREMOS NODEMON, SE INICIA LA VARIABLE APP QUE ESCUCHA POR EL PUERTO 4000
//PARA CAMBIAR EL PUERTO, TENEMOS QUE IR AL ARCHIVO .ENV Y CAMBIAR LA VARIABLE
//PORT AL PUERTO QUE DESEAMOS, ESTO SE HACE PARA EVITAR QUE EL PUERTO QUEDE EXPUESTO
//CUANDO SE SUBA A GITHUB
app.listen(process.env.PORT, () => {    //PUERTO 4000 CAMBIAR PUERTO AQUI!!!!!
	console.log('CONECTADO AL SERVIDOR DE MONGO! :) , ESCUCHANDO POR PUERTO:',process.env.PORT)
})

})
.catch((error) =>{
	console.log(error)
})

