const express = require('express');
const router = express.Router();
const ofertaLaboralController = require('../controllers/ofertaLaboralController');


// Rutas para la API de ofertas Laborales
// localhost:3001/ofertaLaboral/
router.get('/', (req, res, next) => {
    ofertaLaboralController.getAll(req, res); // Pasar req y res directamente
});
router.post('/', (req, res, next) => {
    ofertaLaboralController.getById(req, res); // Pasar req y res directamente
});

router.post('/create', (req, res, next) => {
    ofertaLaboralController.create(req, res); // Pasar req y res directamente
})
router.put('/update', (req, res, next) => {
    ofertaLaboralController.update(req, res); // Pasar req y res directamente
})
router.delete('/remove', (req, res, next) => {
    ofertaLaboralController.remove(req, res); // Pasar req y res directamente
})
router.put('/desactivate', (req, res, next) => {
    ofertaLaboralController.desactiveUser(req, res); // Pasar req y res directamente
})

module.exports = router;