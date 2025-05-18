const db = require('../config/db');

const AntecedenteAcademico = {
    // Obtener todos los antecedentes académicos
    getAll: async () => {
        try {
            const [rows] = await db.query(`
                SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
            `);
            console.log("Antecedentes Académicos obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Académicos." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los Antecedentes Académicos: ", err);
            throw err;
        }
    },

    // Obtener un antecedente académico por id
    getById: async (id) => {
        try {
            const [rows] = await db.query(`
                SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.id = ?
            `, [id]);
            console.log("Antecedente Académico obtenido");
            if (rows.length === 0) {
                return { message: "No se encontró el Antecedente Académico." };
            }
            return rows[0];
        } catch (err) {
            console.error("Error al obtener el Antecedente Académico: ", err);
            throw err;
        }
    },

    // Crear nuevo antecedente académico
    create: async (antecedenteAcademico) => {
        try {
            const [rows] = await db.query(
                `INSERT INTO AntecedenteAcademico (
                    candidato_id, institucion, titulo_obtenido, 
                    anio_ingreso, anio_egreso
                ) VALUES (?, ?, ?, ?, ?)`,
                [
                    antecedenteAcademico.candidato_id,
                    antecedenteAcademico.institucion,
                    antecedenteAcademico.titulo_obtenido,
                    antecedenteAcademico.anio_ingreso,
                    antecedenteAcademico.anio_egreso
                ]
            );
            console.log("Antecedente Académico creado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Académico creado exitosamente." };
            }
            return { error: "No se pudo crear el Antecedente Académico." };
        } catch (err) {
            if (err.code === 'ER_NO_REFERENCED_ROW_2' && err.sqlMessage.includes('candidato_id')) {
                return { error: "El/La candidato/a especificado/a no existe." };
            }
            console.error("Error al crear el antecedente académico: ", err);
            throw err;
        }
    },

    // Actualizar antecedente académico
    update: async (id, datosActualizados) => {
        try {
            const [rows] = await db.query(
                `UPDATE AntecedenteAcademico SET 
                    institucion = ?, 
                    titulo_obtenido = ?, 
                    anio_ingreso = ?, 
                    anio_egreso = ?
                WHERE id = ?`,
                [
                    datosActualizados.institucion,
                    datosActualizados.titulo_obtenido,
                    datosActualizados.anio_ingreso,
                    datosActualizados.anio_egreso,
                    id
                ]
            );
            console.log("Antecedente Académico actualizado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Académico actualizado exitosamente." };
            }
            return { message: "No se encontró el Antecedente Académico para actualizar." };
        } catch (err) {
            console.error("Error al actualizar el Antecedente Académico: ", err);
            throw err;
        }
    },

    // Eliminar antecedente académico
    remove: async (id) => {
        try {
            const [rows] = await db.query(
                "DELETE FROM AntecedenteAcademico WHERE id = ?",
                [id]
            );
            console.log("Antecedente Académico eliminado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Académico eliminado exitosamente." };
            } else {
                return { message: "No se encontró el Antecedente Académico." };
            }
        } catch (err) {
            console.error("Error al eliminar el antecedente académico: ", err);
            throw err;
        }
    },

    // Obtener antecedentes académicos por candidato
    getByCandidatoId: async (candidatoId) => {
        try {
            const [rows] = await db.query(
                `SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.candidato_id = ?`, [candidatoId]
            );
            console.log("Antecedentes Académicos por candidato obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Académicos para este candidato/a." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los Antecedentes Académicos del candidato/a: ", err);
            throw err;
        }
    },

    // Obtener antecedentes académicos por candidato e institución
    getByCandidatoIdAndInstitucion: async (candidatoId, institucion) => {
        try {
            const [rows] = await db.query(
                `SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteAcademico a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.candidato_id = ? AND a.institucion = ?`,
                [candidatoId, institucion]
            );
            console.log("Antecedentes Académicos por candidato e institución obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Académicos para este candidato/a en esa institución." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los Antecedentes Académicos del candidato/a: ", err);
            throw err;
        }
    }
};

module.exports = AntecedenteAcademico;