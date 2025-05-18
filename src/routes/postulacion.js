const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');


// Rutas para la API de postulaciones
// localhost:3001/postulacion/
router.get('/', (req, res, next) => {
    postulacionController.getAll(req, res); // Pasar req y res directamente
});
router.post('/', (req, res, next) => {
    postulacionController.getById(req, res); // Pasar req y res directamente
});

router.post('/create', (req, res, next) => {
    postulacionController.create(req, res); // Pasar req y res directamente
})
router.put('/update', (req, res, next) => {
    postulacionController.update(req, res); // Pasar req y res directamente
})
router.delete('/remove', (req, res, next) => {
    postulacionController.remove(req, res); // Pasar req y res directamente
})
router.put('/desactivate', (req, res, next) => {
    postulacionController.desactiveUser(req, res); // Pasar req y res directamente
})

module.exports = router;