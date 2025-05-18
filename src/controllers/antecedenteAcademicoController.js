const AntecedenteAcademico = require('../models/antecedenteAcademico');

const getAll = async (req, res) => {
    try {
        const result = await AntecedenteAcademico.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener los Antecedentes Académicos: ", err);
        res.status(500).json({ error: "Error al obtener los Antecedentes Académicos" });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await AntecedenteAcademico.getById(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener el antecedente académico: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente académico" });
    }
};

const getByCandidatoId = async (req, res) => {
    try {
        const candidatoId = req.params.candidatoId;
        const result = await AntecedenteAcademico.getByCandidatoId(candidatoId);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener el antecedente académico: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente académico" });
    }
};

const getByCandidatoIdAndInstitucion = async (req, res) => {
    try {
        const candidatoId = req.params.candidatoId;
        const institucion = req.params.institucion;
        const result = await AntecedenteAcademico.getByCandidatoIdAndInstitucion(candidatoId, institucion);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener el antecedente académico: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente académico" });
    }
};

const create = async (req, res) => {
    try {
        const data = req.body;
        const result = await AntecedenteAcademico.create(data);
        res.status(201).json(result);
    } catch (err) {
        console.error("Error al crear el antecedente académico: ", err);
        res.status(500).json({ error: "Error al crear el antecedente académico" });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const result = await AntecedenteAcademico.update(id, datosActualizados);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al actualizar el antecedente académico: ", err);
        res.status(500).json({ error: "Error al actualizar el antecedente académico" });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await AntecedenteAcademico.remove(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al eliminar el antecedente académico: ", err);
        res.status(500).json({ error: "Error al eliminar el antecedente académico" });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByCandidatoId,
    getByCandidatoIdAndInstitucion
};