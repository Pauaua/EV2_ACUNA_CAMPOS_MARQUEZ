const db = require('../config/db');

const AntecedenteLaboral = {
    // Obtener todos los antecedentes laborales
    getAll: async () => {
        try {
            const [rows] = await db.query(`
                SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteLaboral a 
                JOIN Usuario u ON a.candidato_id = u.id
            `);
            console.log("Antecedentes Laborales obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Laborales." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los Antecedentes Laborales: ", err);
            throw err;
        }
    },

    // Obtener un antecedente laboral por id
    getById: async (id) => {
        try {
            const [rows] = await db.query(`
                SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteLaboral a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.id = ?
            `, [id]);
            console.log("Antecedente Laboral obtenido");
            if (rows.length === 0) {
                return { message: "No se encontró el Antecedente Laboral." };
            }
            return rows[0];
        } catch (err) {
            console.error("Error al obtener el Antecedente Laboral: ", err);
            throw err;
        }
    },

    // Crear nuevo antecedente laboral
    create: async (antecedenteLaboral) => {
        try {
            const [rows] = await db.query(
                `INSERT INTO AntecedenteLaboral (
                    candidato_id, empresa, cargo, 
                    funciones, fecha_inicio, fecha_termino
                ) VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    antecedenteLaboral.candidato_id,
                    antecedenteLaboral.empresa,
                    antecedenteLaboral.cargo,
                    antecedenteLaboral.funciones,
                    antecedenteLaboral.fecha_inicio,
                    antecedenteLaboral.fecha_termino
                ]
            );
            console.log("Antecedente Laboral creado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Laboral creado exitosamente." };
            }
            return { error: "No se pudo crear el Antecedente Laboral." };
        } catch (err) {
            if (err.code === 'ER_NO_REFERENCED_ROW_2' && err.sqlMessage.includes('candidato_id')) {
                return { error: "El/La candidato/a no existe." };
            }
            console.error("Error al crear antecedente laboral: ", err);
            throw err;
        }
    },

    // Actualizar antecedente laboral
    update: async (id, datosActualizados) => {
        try {
            const [rows] = await db.query(
                `UPDATE AntecedenteLaboral SET 
                    empresa = ?, 
                    cargo = ?, 
                    funciones = ?, 
                    fecha_inicio = ?, 
                    fecha_termino = ?
                WHERE id = ?`,
                [
                    datosActualizados.empresa,
                    datosActualizados.cargo,
                    datosActualizados.funciones,
                    datosActualizados.fecha_inicio,
                    datosActualizados.fecha_termino,
                    id
                ]
            );
            console.log("Antecedente Laboral actualizado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Laboral actualizado exitosamente." };
            }
            return { message: "No se encontró el Antecedente Laboral para actualizar." };
        } catch (err) {
            console.error("Error al actualizar el Antecedente Laboral: ", err);
            throw err;
        }
    },

    // Eliminar antecedente laboral
    remove: async (id) => {
        try {
            const [rows] = await db.query(
                "DELETE FROM AntecedenteLaboral WHERE id = ?",
                [id]
            );
            console.log("Antecedente Laboral eliminado");
            if (rows.affectedRows > 0) {
                return { message: "Antecedente Laboral eliminado exitosamente." };
            } else {
                return { message: "No se encontró el Antecedente Laboral." };
            }
        } catch (err) {
            console.error("Error al eliminar el Antecedente Laboral: ", err);
            throw err;
        }
    },

    // Obtener antecedentes por candidato/a
    getByCandidatoId: async (candidatoId) => {
        try {
            const [rows] = await db.query(
                `SELECT a.*, u.nombre as candidato_nombre 
                FROM AntecedenteLaboral a
                JOIN Usuario u ON a.candidato_id = u.id
                WHERE a.candidato_id = ?`, [candidatoId]
            );
            console.log("Antecedentes Laborales por candidato/a obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron Antecedentes Laborales para este candidato/a." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los Antecedentes Laborales para el/la candidato/a: ", err);
            throw err;
        }
    }
};

module.exports = AntecedenteLaboral;