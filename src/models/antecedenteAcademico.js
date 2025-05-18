const db = require('../config/db');
const AntecedenteAcademico = {
    getAll: async() => {
        try{
            const [rows] = await db.query(`SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id`);
            console.log("Antecedentes Académicos obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron AntecedenteAcademico." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los AntecedenteAcademico: ", err);
            throw err;
        }
    },
    getById: async(antecedenteAcademico) => {
        try{
            const [rows] = await db.query(`SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.id = ?
            `, [antecedenteAcademico.id])
            console.log("Antecedentes Académicos obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Académicos para este candidato." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los AntecedenteAcademico: ", err);
            throw err;
        }
    },
    create: async(antecedenteAcademico) => {
        try{
            const [rows] = await db.query(
                `INSERT INTO AntecedenteAcademico (
                    candidato_id, institucion, titulo_obtenido, 
                    anio_ingreso, anio_egreso
                ) VALUES (?, ?, ?, ?, ?)`,
                [antecedenteAcademico.candidato_id, antecedenteAcademico.institucion, antecedenteAcademico.titulo_obtenido, 
                 antecedenteAcademico.anio_ingreso, antecedenteAcademico.anio_egreso]
            );
            console.log("Antecedente Académico creado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Académico creado exitosamente." };
            }
            return rows;
        }catch(err){
            if (err.code === 'ER_NO_REFERENCED_ROW_2' && err.sqlMessage.includes('candidato_id')) {
                return { error: "El/La candidato/a especificado/a no existe." };
            }
            console.error("Error al crear el antecedente académico: ", err);
            throw err;
        }
    },
    update: async(antecedenteAcademico) => {
        try{
            const [rows] = await db.query(
                `UPDATE AntecedenteAcademico SET 
                    institucion = ?, 
                    titulo_obtenido = ?, 
                    anio_ingreso = ?, 
                    anio_egreso = ?
                WHERE id = ?`,
                [antecedenteAcademico.titulo_obtenido, antecedenteAcademico.anio_ingreso, antecedenteAcademico.anio_egreso, antecedenteAcademico.id]
            );
            console.log("Antecedente Académico actualizado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Académico actualizado exitosamente." };
            }
            return rows;
        }catch(err){
            console.error("Error al actualizar el Antecedente Académico: ", err);
            throw err;
        }
    },
    remove: async(antecedenteAcademico) => {
        try{
            const [rows] = await db.query(
                "DELETE FROM AntecedenteAcademico WHERE id = ?",
                [antecedenteAcademico.id]
            );
            console.log("Antecedente Académico eliminado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Académico eliminado exitosamente." };
            }
            else if (rows.affectedRows === 0){
                return { message: "No se encontró el antecedente académico." };
            }
            return rows;
        }catch(err){
            console.error("Error al eliminar el antecedente académico: ", err);
            throw err;
        }
    },

//obtener un antecedente académico por candidato
    getByCandidatoId: async(antecedenteAcademico) => {
        try{
            const [rows] = await db.query(
                `SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.candidato_id = ?`,
                [antecedenteAcademico.candidato_id]
            );
            console.log("Antecedentes Académicos obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Académicos para este candidato/a." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los Antecedentes Académico del candidato/a: ", err);
            throw err;
        }
    },

    getByCandidatoIdAndInstitucion: async(antecedenteAcademico) => {
        try{
            const [rows] = await db.query(
                `SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.candidato_id = ? AND a.institucion = ?`,
                [antecedenteAcademico.candidato_id, antecedenteAcademico.institucion]
            );
            console.log("Antecedentes Académicos obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Académicos para este candidato/a." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener los Antecedentes Académico del candidato/a: ", err);
            throw err;
        }
    }
};
module.exports = AntecedenteAcademico;