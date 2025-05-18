const antecedenteAcademico = require('../models/antecedenteAcademico');

const getAll = async (req, res) => {
    try {
        const result = await antecedenteAcademico.getAll();
        console.log("Resultado obtenido en el controlador: ", result);
        res.status(200).json(result); // Asegurar que se envía la respuesta
    } catch (err) {
        console.error("Error al obtener los Antecedentes Académicos: ", err);
        res.status(500).json({ error: "Error al obtener los Antecedentes Académicos" });
    }
};
const create = async (req, res) => {
    try{
        const antecedenteAcademico = req.body;
        const result = await antecedenteAcademico.create(antecedenteAcademico);
        res.status(201).json(result);
    }
    catch(err){
        console.error("Error al crear el antecedente académico: ", err);
        res.status(500).json({ error: "Error al crear el Antecedente Académico" });
    }
    

}
const update = async (req, res) => {
    try{
        const antecedenteAcademico = req.body;
        const result = await antecedenteAcademico.update(antecedenteAcademico);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar el Antecedente Académicos: ", err);
        res.status(500).json({ error: "Error al actualizar el Antecedente Académico" });
    }
    
}
const remove = async (req, res) => {
    try{
        const antecedenteAcademico = req.body;
        const result = await antecedenteAcademico.remove(antecedenteAcademico);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar el antecedente académico: ", err);
        res.status(500).json({ error: "Error al actualizar el antecedente académico" });
    }
    
}
const getById = async (req, res) => {
    try{
        const antecedenteAcademico = req.body;
        const result = await antecedenteAcademico.getById(antecedenteAcademico);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener el antecedente académico: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente académico" });
    }
    
}
const getByCandidatoId = async (req, res) => {
    try{
        const antecedenteAcademico = req.body;
        const result = await antecedenteAcademico.getByCandidatoId(antecedenteAcademico);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener el antecedente académico: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente académico" });
    }
    
}
const getByCandidatoIdAndInstitucion = async (req, res) => {
    try{
        const antecedenteAcademico = req.body;
        const result = await antecedenteAcademico.getByCandidatoIdAndInstitucion(antecedenteAcademico);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener el antecedente académico: ", err);
        res.status(500).json({ error: "Error al obtener el antecedente académico" });
    }
    
}


module.exports = {getAll,getById,create,update,remove,getByCandidatoId,getByCandidatoIdAndInstitucion};