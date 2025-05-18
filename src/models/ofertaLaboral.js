const db = require('../config/db');
const OfertaLaboral = {
    getAll: async() => {
        try{
            const [rows] = await db.query('SELECT o.*, u.nombre as reclutador_nombre FROM OfertaLaboral o LEFT JOIN Usuario u ON o.reclutador_id = u.id'
           ); 
            if (rows.length === 0) {
                return { message: "No se encontraron Ofertas Laborales." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener las Ofertas Laborales: ", err);
            throw err;
        }
    },
    getById: async(id) => {
        try{
            const [rows] = await db.query(
                `SELECT o.*, u.nombre as reclutador_nombre 
                FROM OfertaLaboral o 
                LEFT JOIN Usuario u ON o.reclutador_id = u.id
                WHERE o.id = ?`, [id]
            );
            console.log("Oferta Laborales obtenidas");
            if (rows.length === 0) {
                return { message: "No se encontraron Ofertas Laborales." };
            }
            return rows;
        }catch(err){
            console.error("Error al obtener las Ofertas Laborales: ", err);
            throw err;
        }
    },
    create: async(ofertaLaboral) => {
    try{
        const [rows] = await db.query(
            "INSERT INTO ofertaLaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                ofertaLaboral.titulo,
                ofertaLaboral.descripcion,
                ofertaLaboral.ubicacion,
                ofertaLaboral.salario,
                ofertaLaboral.tipo_contrato,
                ofertaLaboral.fecha_publicacion,
                ofertaLaboral.fecha_cierre,
                ofertaLaboral.estado,
                ofertaLaboral.reclutador_id 
            ]
        );
        console.log("Oferta Laboral creada");
        if (rows.affectedRows > 0) {
            return { message: "Oferta Laboral creada exitosamente." };
        }
        return rows;
    }catch(err){
        if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.includes('titulo')) {
            return { error: "La oferta laboral ya existe con ese nombre." };
        }
        console.error("Error al crear oferta laboral: ", err);
        throw err;
    }
},
    update: async(ofertaLaboral) => {
        try{
            const [rows] = await db.query(
                `UPDATE OfertaLaboral SET 
                    titulo = ?, 
                    descripcion = ?, 
                    ubicacion = ?, 
                    salario = ?, 
                    tipo_contrato = ?, 
                    fecha_cierre = ?,
                    estado = ?
                WHERE id = ?`,
                [
                    ofertaLaboral.titulo,
                    ofertaLaboral.descripcion,
                    ofertaLaboral.ubicacion,
                    ofertaLaboral.salario,
                    ofertaLaboral.tipo_contrato,
                    ofertaLaboral.fecha_cierre,
                    ofertaLaboral.estado,
                    ofertaLaboral.id
                ]
            );
            console.log("Oferta Laboral actualizada");
            if (rows.affectedRows > 0) {
                return { message: "Oferta Laboral actualizada exitosamente." };
            }
            return rows;
        }catch(err){
            console.error("Error al actualizar Oferta Laboral: ", err);
            throw err;
        }
    },
    remove: async(id) => {
        try{
            const [rows] = await db.query(
                "UPDATE OfertaLaboral SET estado = 'Baja' WHERE id = ?",
                [id]
           );
            console.log("Oferta Laboral eliminada");
            if (rows.affectedRows > 0) {
                return { message: "Oferta Laboral eliminada exitosamente." };
            }
            else if (rows.affectedRows === 0){
                return { message: "No se encontró el oferta laboral." };
            }
            return rows;
        }catch(err){
            console.error("Error al eliminar la oferta laboral: ", err);
            throw err;
        }
    },
   updateEstado: async (id, nuevoEstado) => {
        try {
            const [rows] = await db.query(
                "UPDATE OfertaLaboral SET estado = ? WHERE id = ?",
                [nuevoEstado, id]
            );
            if (rows.affectedRows > 0) {
                return { message: "Estado de la oferta laboral actualizado exitosamente." };
            } else if (rows.affectedRows === 0) {
                return { message: "No se encontró la oferta laboral." };
            }
            return rows;
        }catch(err){
            console.error("Error al actualizar la oferta laboral: ", err);
            throw err;
        }
    },
};
module.exports = OfertaLaboral;