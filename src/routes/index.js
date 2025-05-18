const express = require('express');
const router = express.Router();

//Importe ruta de los modulos
const usuarioRoutes           = require('./usuario');
const antecedenteLaboral     = require('./antecedenteLaboral');
const antecedenteAcademico = require('./antecedenteAcademico');
const ofertaLaboral           = require('./ofertaLaboral');
const postulacion           = require('./postulacion');

//Asocias rutas a endpoints
router.use('/usuarios', usuarioRoutes);
router.use('/antecedenteLaboral', antecedenteLaboral);
router.use('/antecedenteAcademico', antecedenteAcademico);
router.use('/ofertaLaboral', ofertaLaboral);
router.use('/postulacion', postulacion);

//Middleware
router.use((req,res) => {
    console.error("Ruta no orquestada en index.js"+req.method+" "+req.url);
    res.status(404).json({error: "Ruta no encontrada"});
})
//Exportar 
module.exports = router;