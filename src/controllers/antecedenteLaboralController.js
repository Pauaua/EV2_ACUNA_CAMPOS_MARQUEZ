const AntecedenteLaboral = require('../models/antecedenteLaboral');

const getAll = async (req, res) => {
    try {
        const result = await AntecedenteLaboral.getAll();
        console.log("Resultado obtenido en el controlador: ", result);
        res.status(200).json(result); // Asegurar que se envía la respuesta
    } catch (err) {
        console.error("Error al obtener los Antecedentes Laborales: ", err);
        res.status(500).json({ error: "Error al obtener los Antecedentes Laborales" });
    }
};
const create = async (req, res) => {
    try{
        const antecedenteLaboral = req.body;
        const result = await AntecedenteLaboral.create(antecedenteLaboral);
        res.status(201).json(result);
    }
    catch(err){
        console.error("Error al crear el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al crear el antecedente laboral" });
    }
    

}
const update = async (req, res) => {
    try{
        const antecedenteLaboral = req.body;
        const result = await AntecedenteLaboral.update(antecedenteLaboral);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al actualizar el antecedente laboral" });
    }
    
}
const remove = async (req, res) => {
    try{
        const antecedenteLaboral = req.body;
        const result = await AntecedenteLaboral.remove(antecedenteLaboral);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al actualizar el antecedente laboral" });
    }
    
}
const getById = async (req, res) => {
    try{
        const antecedenteLaboral = req.body;
        const result = await AntecedenteLaboral.getById(antecedenteLaboral);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente laboral" });
    }
    
}
const getByCandidatoId = async (req, res) => {
    try{
        const antecedenteLaboral = req.body;
        const result = await AntecedenteLaboral.getByCandidatoId(antecedenteLaboral);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener el antecedente laboral: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente laboral" });
    }
    
}


module.exports = {getAll,getById,create,update,remove,getByCandidatoId};