const AntecedenteLaboral = require('../models/antecedenteLaboral');

const getAll = async (req, res) => {
    try {
        const result = await AntecedenteLaboral.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener los Antecedentes Laborales: ", err);
        res.status(500).json({ error: "Error al obtener los Antecedentes Laborales" });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await AntecedenteLaboral.getById(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente laboral" });
    }
};

const getByCandidatoId = async (req, res) => {
    try {
        const candidatoId = req.params.candidatoId;
        const result = await AntecedenteLaboral.getByCandidatoId(candidatoId);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente laboral" });
    }
};

const create = async (req, res) => {
    try {
        const antecedenteLaboral = req.body;
        const result = await AntecedenteLaboral.create(antecedenteLaboral);
        res.status(201).json(result);
    } catch (err) {
        console.error("Error al crear el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al crear el antecedente laboral" });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const result = await AntecedenteLaboral.update(id, datosActualizados);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al actualizar el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al actualizar el antecedente laboral" });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await AntecedenteLaboral.remove(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al eliminar el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al eliminar el antecedente laboral" });
    }
};

module.exports = { getAll, getById, create, update, remove, getByCandidatoId };