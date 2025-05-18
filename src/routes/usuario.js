const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// Rutas para la API de usuarios
// localhost:3000/usuarios/
router.get('/', (req, res, next) => {
    usuarioController.getAll(req, res); // Pasar req y res directamente
});
router.post('/', (req, res, next) => {
    usuarioController.getById(req, res); // Pasar req y res directamente
});

router.post('/create', (req, res, next) => {
    usuarioController.create(req, res); // Pasar req y res directamente
})
router.put('/update', (req, res, next) => {
    usuarioController.update(req, res); // Pasar req y res directamente
})
router.delete('/remove', (req, res, next) => {
    usuarioController.remove(req, res); // Pasar req y res directamente
})
router.put('/desactivate', (req, res, next) => {
    usuarioController.desactiveUser(req, res); // Pasar req y res directamente
})

module.exports = router;