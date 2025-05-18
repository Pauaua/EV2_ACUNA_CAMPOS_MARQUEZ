const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());


// cargar variables de entorno
dotenv.config();

// middleware para solicitudes entrantes
app.use((req,res,next)=>{
    console.log(`Solicitud entrante: ${req.method} ${req.url}`);
    next();
})

app.get('/favicon.ico', (req, res) => res.status(204).end());


// Importar las rutas
const routes = require('./src/routes/index'); 

 // Usar las rutas con el prefijo /api
app.use('/api', routes);


//middleware
app.use((err,res,req,next)=>{
    console.error("Error en la aplicación: ", err);
    res.status(500).json({error:"Error interno del servidor"});
});

//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log('URL BASE: http://localhost:3000/api');
});