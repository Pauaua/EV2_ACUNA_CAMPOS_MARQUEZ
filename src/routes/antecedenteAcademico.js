const express = require('express');
const router = express.Router();
const antecedenteAcademicoController = require('../controllers/antecedenteAcademicoController');


// Rutas para la API de los Antecedentes Académicos
// localhost:3000/antecedenteAcademico/
router.get('/', (req, res, next) => {
    antecedenteAcademicoController.getAll(req, res); // Pasar req y res directamente
});
router.post('/', (req, res, next) => {
    antecedenteAcademicoController.getById(req, res); // Pasar req y res directamente
});

router.post('/create', (req, res, next) => {
    antecedenteAcademicoController.create(req, res); // Pasar req y res directamente
})
router.put('/update', (req, res, next) => {
    antecedenteAcademicoController.update(req, res); // Pasar req y res directamente
})
router.delete('/remove', (req, res, next) => {
    antecedenteAcademicoController.remove(req, res); // Pasar req y res directamente
})
router.put('/desactivate', (req, res, next) => {
    antecedenteAcademicoController.desactiveUser(req, res); // Pasar req y res directamente
})

module.exports = router;