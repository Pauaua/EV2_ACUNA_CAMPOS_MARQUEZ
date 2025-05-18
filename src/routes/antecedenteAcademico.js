const express = require('express');
const router = express.Router();
const antecedenteAcademicoController = require('../controllers/antecedenteAcademicoController');

// Obtener todos los antecedentes académicos
router.get('/', antecedenteAcademicoController.getAll);

// Obtener antecedente académico por id
router.get('/:id', antecedenteAcademicoController.getById);

// Obtener antecedentes académicos por candidato
router.get('/candidato/:candidatoId', antecedenteAcademicoController.getByCandidatoId);

// Obtener antecedentes académicos por candidato e institución
router.get('/candidato/:candidatoId/institucion/:institucion', antecedenteAcademicoController.getByCandidatoIdAndInstitucion);

// Crear antecedente académico
router.post('/', antecedenteAcademicoController.create);

// Actualizar antecedente académico por id
router.put('/:id', antecedenteAcademicoController.update);

// Eliminar antecedente académico por id
router.delete('/:id', antecedenteAcademicoController.remove);

module.exports = router;