const express = require('express');
const router = express.Router();
const antecedenteLaboralController = require('../controllers/antecedenteLaboralController');

// Obtener todos los antecedentes laborales
router.get('/', antecedenteLaboralController.getAll);

// Obtener antecedente laboral por id
router.get('/:id', antecedenteLaboralController.getById);

// Obtener antecedentes laborales por candidato
router.get('/candidato/:candidatoId', antecedenteLaboralController.getByCandidatoId);

// Crear antecedente laboral
router.post('/', antecedenteLaboralController.create);

// Actualizar antecedente laboral por id
router.put('/:id', antecedenteLaboralController.update);

// Eliminar antecedente laboral por id
router.delete('/:id', antecedenteLaboralController.remove);

module.exports = router;