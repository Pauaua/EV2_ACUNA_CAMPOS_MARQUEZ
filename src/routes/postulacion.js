const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');


// Rutas para la API de postulaciones
// localhost:3001/postulacion/
// Obtener todas las postulaciones
router.get('/', postulacionController.getAll);

// Obtener postulación por id
router.get('/:id', postulacionController.getById);

// Crear postulación
router.post('/', postulacionController.create);

// Actualizar postulación por id
router.put('/:id', postulacionController.update);

// Eliminar postulación por id
router.delete('/:id', postulacionController.remove);

// Actualizar estado de postulación por id
router.put('/estado/:id', postulacionController.updateEstado);

module.exports = router;