const OfertaLaboral = require('../models/ofertaLaboral');

const getAll = async (req, res) => {
    try {
        const result = await OfertaLaboral.getAll();
        console.log("Resultado obtenido en controlador: ", result);
        res.status(200).json(result); // Asegurar que se envía la respuesta
    } catch (err) {
        console.error("Error al obtener las Ofertas Laborales: ", err);
        res.status(500).json({ error: "Error al obtener las Ofertas Laborales" });
    }
};
const create = async (req, res) => {
    try{
        const oferta = req.body;
        const result = await OfertaLaboral.create(oferta);
        res.status(201).json(result);
    }
    catch(err){
        console.error("Error al crear oferta laboral: ", err);
        res.status(500).json({ error: "Error al crear oferta laboral" });
    }
    

}
const update = async (req, res) => {
    try{
        const oferta = req.body;
        const result = await OfertaLaboral.update(oferta);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar oferta: ", err);
        res.status(500).json({ error: "Error al actualizar oferta" });
    }
    
}
const remove = async (req, res) => {
    try{
        const oferta = req.body;
        const result = await OfertaLaboral.remove(oferta);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al actualizar oferta laboral: ", err);
        res.status(500).json({ error: "Error al actualizar oferta laboral" });
    }
    
}
const getById = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await OfertaLaboral.getById(id);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al obtener oferta laboral: ", err);
        res.status(500).json({ error: "Error al obtener oferta laboral" });
    }
    
}
const updateEstado = async (req, res) => {
    try{
        const oferta = req.body;
        const result = await OfertaLaboral.updateEstado(oferta);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Error al desactivar oferta laboral: ", err);
        res.status(500).json({ error: "Error al desactivar oferta laboral" });
    }
    
}


module.exports = {getAll,getById,create,update,remove,updateEstado};