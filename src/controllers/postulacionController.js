const Postulacion = require('../models/postulacion');

const getAll = async (req, res) => {
    try {
        const result = await Postulacion.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener las postulaciones: ", err);
        res.status(500).json({ error: "Error al obtener las postulaciones" });
    }
};
const create = async (req, res) => {
    try {
        const postulacion = req.body;
        const result = await Postulacion.create(postulacion);
        res.status(201).json(result);
    } catch (err) {
        console.error("Error al crear la postulación: ", err);
        res.status(500).json({ error: "Error al crear la postulación" });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const result = await Postulacion.update(id, datosActualizados);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al actualizar la postulación: ", err);
        res.status(500).json({ error: "Error al actualizar la postulación" });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Postulacion.remove(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al eliminar la postulación: ", err);
        res.status(500).json({ error: "Error al eliminar la postulación" });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Postulacion.getById(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al obtener la postulación: ", err);
        res.status(500).json({ error: "Error al obtener la postulación" });
    }
};
const updateEstado = async (req, res) => {
    try {
        const id = req.params.id;
        const { nuevoEstado, comentario } = req.body;
        const result = await Postulacion.updateEstado(id, nuevoEstado, comentario);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error al actualizar el estado de la postulación: ", err);
        res.status(500).json({ error: "Error al actualizar el estado de la postulación" });
    }
};


module.exports = {getAll,getById,create,update,remove,updateEstado};