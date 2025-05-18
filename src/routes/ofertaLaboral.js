const express = require('express');
const router = express.Router();
const ofertaLaboralController = require('../controllers/ofertaLaboralController');


// Rutas para la API de ofertas Laborales
// localhost:3001/ofertaLaboral/
router.get('/',ofertaLaboralController.getAll); 
//Obtener oferta laboral por id
router.get('/:id', ofertaLaboralController.getById); 


//Crear oferta laboral
router.post('/', ofertaLaboralController.create); 

// Actualizar oferta laboral por id
router.put('/update', ofertaLaboralController.update); 

//Eliminar oferta laboral por titulo
router.delete('/:titulo', ofertaLaboralController.remove); 

//Actualizar estado oferta laboral 
router.put('/updateEstado', ofertaLaboralController.updateEstado); 


module.exports = router;