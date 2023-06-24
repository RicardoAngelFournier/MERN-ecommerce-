require('dotenv').config()

const  express = require('express')
//app de express
const app = express()


app.get('/', (req,res) => {
	res.json({mssg: 'Bienvenido a la app, funcionando'})
})
//LEER IMPOIRTANTE:
//CUANDO CORREMOS NODEMON, SE INICIA LA VARIABLE APP QUE ESCUCHA POR EL PUERTO 4000
//PARA CAMBIAR EL PUERTO, TENEMOS QUE IR AL ARCHIVO .ENV Y CAMBIAR LA VARIABLE
//PORT AL PUERTO QUE DESEAMOS, ESTO SE HACE PARA EVITAR QUE EL PUERTO QUEDE EXPUESTO
//CUANDO SE SUBA A GITHUB
app.listen(process.env.PORT, () => {    //PUERTO 4000 CAMBIAR PUERTO AQUI!!!!!
	console.log('ESCUCHANDO POR PUERTO:',process.env.PORT)
})

