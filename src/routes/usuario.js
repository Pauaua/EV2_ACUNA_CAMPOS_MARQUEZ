const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Obtener todos los usuarios
router.get('/', usuarioController.getAll);

// Obtener usuario por id
router.get('/:id', usuarioController.getById);

// Crear usuario
router.post('/', usuarioController.create);

// Actualizar usuario por id
router.put('/:id', usuarioController.update);

// Eliminar usuario por email
router.delete('/:email', usuarioController.remove);

// Desactivar usuario
router.put('/desactivate', usuarioController.desactiveUser);

module.exports = router;