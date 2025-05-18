const db = require('../config/db');
const Postulacion = {
    getAll: async() => {
        try{
            const [rows] = await db.query("SELECT * FROM Postulacion");
            console.log("Postulaciones obtenidas");
            if (rows.length === 0) {
                return { message: "No se encontraron postulaciones." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener las postulaciones: ", err);
            throw err;
        }
    },
    getById: async(id) => {
        try{
            const [rows] = await db.query("SELECT * FROM Postulacion where id = ?", [id]);
            console.log("Postulaciones obtenidas");
            if (rows.length === 0) {
                return { message: "No se encontraron postulaciones." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener las postulaciones: ", err);
            throw err;
        }
    },
    create: async (postulacion) => {
        try {
            
            const { candidato_id, oferta_laboral_id, estado_postulacion, comentario } = postulacion;
            const [result] = await db.query(
                "INSERT INTO Postulacion (candidato_id, oferta_laboral_id, estado_postulacion, comentario) VALUES (?, ?, ?, ?)",
                [candidato_id, oferta_laboral_id, estado_postulacion || 'Postulando', comentario || null]
            );
            console.log("Postulación creada");
            return { 
                id: result.insertId,
                message: "Postulación creada exitosamente.",
                ...postulacion
            };
        } catch (err) {
            console.error("Error al crear la postulación: ", err);
            throw err;
        }
    },
    update: async (id, datosActualizados) => {
        try {
            const { estado_postulacion, comentario } = datosActualizados;
            const [result] = await db.query(
                "UPDATE Postulacion SET estado_postulacion = ?, comentario = ? WHERE id = ?",
                [estado_postulacion, comentario, id]
            );
            console.log("Postulación actualizada");
            return result.affectedRows > 0 
                ? { message: "Postulación actualizada exitosamente." }
                : { message: "No se encontró la postulación para actualizar." };
        } catch (err) {
            console.error("Error al actualizar la postulación: ", err);
            throw err;
        }
    },
    remove: async (id) => {
        try {
            const [result] = await db.query("DELETE FROM Postulacion WHERE id = ?", [id]);
            console.log("Postulación eliminada");
            return result.affectedRows > 0
                ? { message: "Postulación eliminada exitosamente." }
                : { message: "No se encontró la postulación para eliminar." };
        } catch (err) {
            console.error("Error al eliminar la postulación: ", err);
            throw err;
        }
    },
    // Actualizar estado de postulación (para reclutadores)
    updateEstado: async (id, nuevoEstado, comentario = null) => {
        try {
            const [result] = await db.query(
                "UPDATE Postulacion SET estado_postulacion = ?, comentario = ? WHERE id = ?",
                [nuevoEstado, comentario, id]
            );
            console.log("Estado de postulación actualizado");
            return result.affectedRows > 0
                ? { message: "Estado de postulación actualizado exitosamente." }
                : { message: "No se encontró la postulación para actualizar." };
        } catch (err) {
            console.error("Error al actualizar el estado de la postulación: ", err);
            throw err;
        }
    },

    // Obtener postulaciones por candidato
    getByCandidatoId: async (candidato_id) => {
        try {
            const [rows] = await db.query(
                "SELECT * FROM Postulacion WHERE candidato_id = ?",
                [candidato_id]
            );
            console.log("Postulaciones por candidato obtenidas");
            return rows.length > 0 ? rows : { message: "No se encontraron postulaciones para este candidato." };
        } catch (err) {
            console.error("Error al obtener postulaciones por candidato: ", err);
            throw err;
        }
    },

    // Obtener postulaciones por oferta laboral
    getByOfertaId: async (oferta_laboral_id) => {
        try {
            const [rows] = await db.query(
                "SELECT * FROM Postulacion WHERE oferta_laboral_id = ?",
                [oferta_laboral_id]
            );
            console.log("Postulaciones por oferta obtenidas");
            return rows.length > 0 ? rows : { message: "No se encontraron postulaciones para esta oferta." };
        } catch (err) {
            console.error("Error al obtener postulaciones por oferta: ", err);
            throw err;
        }
    }
};

module.exports = Postulacion;