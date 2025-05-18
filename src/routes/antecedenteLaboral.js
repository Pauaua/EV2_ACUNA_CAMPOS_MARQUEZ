const express = require('express');
const router = express.Router();
const antecedenteLaboralController = require('../controllers/antecedenteLaboralController');


// Rutas para la API de los Antecedentes Laborales
// localhost:3000/antecedenteLaboral/

router.get('/', (req, res, next) => {
    antecedenteLaboralController.getAll(req, res); // Pasar req y res directamente
});
router.post('/', (req, res, next) => {
    antecedenteLaboralController.getById(req, res); // Pasar req y res directamente
});

router.post('/create', (req, res, next) => {
    antecedenteLaboralController.create(req, res); // Pasar req y res directamente
})
router.put('/update', (req, res, next) => {
    antecedenteLaboralController.update(req, res); // Pasar req y res directamente
})
router.delete('/remove', (req, res, next) => {
    antecedenteLaboralController.remove(req, res); // Pasar req y res directamente
})
router.put('/desactivate', (req, res, next) => {
    antecedenteLaboralController.desactiveAntecedenteLaboral(req, res); // Pasar req y res directamente
})

module.exports = router;