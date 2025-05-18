const Postulacion = require('../models/postulacion');

const getAll = async (req, res) => {
    try {
        const result = await Postulacion.getAll();
        //console.log("Resultado obtenido en el controlador: ", result);
        res.status(200).json(result); // Asegurar que se envía la respuesta
    } catch (err) {
        console.error("Error al obtener las postulaciones: ", err);
        res.status(500).json({ error: "Error al obtener las postulaciones" });
    }
};
const create = async (req, res) => {
    try{
        const postulacion = req.body;
        const result = await Postulacion.create(postulacion);
        res.status(201).json(result);
    }
    catch(err){
        console.error("Error al crear la postulación: ", err);
        res.status(500).json({ error: "Error al crear la postulación" });
    }
    

}
const update = async (req, res) => {
    try{
        const postulacion = req.body;
        const result = await Postulacion.update(postulacion);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar la postulación: ", err);
        res.status(500).json({ error: "Error al actualizar la postulación" });
    }
    
}
const remove = async (req, res) => {
    try{
        const postulacion = req.body;
        const result = await Postulacion.remove(postulacion);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar la postulación: ", err);
        res.status(500).json({ error: "Error al actualizar la postulación" });
    }
    
}
const getById = async (req, res) => {
    try{
        const postulacion = req.body;
        const result = await Postulacion.getById(postulacion);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener la postulación: ", err);
        res.status(500).json({ error: "Error al obtener la postulación" });
    }
    
}
const updateEstado = async (req, res) => {
    try{
        const postulacion = req.body;
        const result = await Postulacion.desactiveUser(postulacion);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al desactivar la postulación: ", err);
        res.status(500).json({ error: "Error al desactivar la postulación" });
    }
    
}


module.exports = {getAll,getById,create,update,remove,updateEstado};