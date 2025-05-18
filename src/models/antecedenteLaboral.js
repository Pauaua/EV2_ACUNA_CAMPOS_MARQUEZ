const db = require('../config/db');


const AntecedenteLaboral = {
    getAll: async() => {
        try{
            const [rows] = await db.query(`SELECT a.*, u.nombre as candidato_nombre 
            FROM AntecedenteLaboral a JOIN Usuario u ON a.candidato_id = u.id`);
            console.log("AntecedenteLaboral obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Laborales." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los Antecedentes Laborales: ", err);
            throw err;
        }
    },
    // obtener un antecedente laboral por id
    getById: async(antecedenteLaboral) => {
        try{
            const [rows] = await db.query(`
                SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteLaboral a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.id = ?
            `, [antecedenteLaboral.id]);
            console.log("Antecedentes Laborales obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Laborales." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los Antecedentes Laborales: ", err);
            throw err;
        }
    },
    //crear nuevo antecedente laboral
    create: async(antecedenteLaboral) => {
        try{
            const [rows] = await db.query(
                `INSERT INTO AntecedenteLaboral (
                    candidato_id, empresa, cargo, 
                    funciones, fecha_inicio, fecha_termino
                ) VALUES (?, ?, ?, ?, ?, ?)`,
                [antecedenteLaboral.candidato_id, antecedenteLaboral.empresa, 
                antecedenteLaboral.cargo, antecedenteLaboral.funciones, antecedenteLaboral.fecha_inicio,
                antecedenteLaboral.fecha_termino]
            );
            console.log("Antecedente Laboral creado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Laboral creado exitosamente." };
            }
            return rows;
        }catch(err){
            if (err.code === 'ER_NO_REFERENCED_ROW_2' && err.sqlMessage.includes('candidato_id')) {
                return { error: "El/La candidato/a no existe." };
            }
            console.error("Error al crear antecedente laboral: ", err);
            throw err;
        }
    },
    //actualizar antecedente laboral
    update: async(antecedenteLaboral) => {
        try{
            const [rows] = await db.query(
                `UPDATE AntecedenteLaboral SET 
                    empresa = ?, 
                    cargo = ?, 
                    funciones = ?, 
                    fecha_inicio = ?, 
                    fecha_termino = ?
                WHERE id = ?`,
                [antecedenteLaboral.empresa, antecedenteLaboral.cargo, antecedenteLaboral.funciones, antecedenteLaboral.fecha_inicio, antecedenteLaboral.fecha_termino, antecedenteLaboral.id]
            );
            console.log("Antecedente Laboral actualizado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Laboral actualizado exitosamente." };
            }
            return rows;
        }catch(err){
            console.error("Error al actualizar el Antecedente Laboral: ", err);
            throw err;
        }
    },
    //eliminar antecedente laboral
    remove: async(antecedenteLaboral) => {
        try{
            const [rows] = await db.query(
                "DELETE FROM AntecedenteLaboral WHERE id = ?",
                [antecedenteLaboral.id]
            );
            console.log("Antecedente Laboral eliminado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Laboral eliminado exitosamente." };
            }
            else if (rows.affectedRows === 0){
                return { message: "No se encontró el Antecedente Laboral." };
            }
            return rows;
        }catch(err){
            console.error("Error al eliminar el antecedenteLaboral: ", err);
            throw err;
        }
    },
    // obtener antecedentes por candidato/a
    getByCandidatoId: async(candidatoId) => {
        try{
            const [rows] = await db.query(
                `SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteLaboral a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.candidato_id = ?`, [candidatoId]
            );
            console.log("Antecedentes Laborales obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Laborales." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los Antecedentes Laborales para el/la candidato/a: ", err);
            throw err;
        }
    }

};
module.exports = AntecedenteLaboral;