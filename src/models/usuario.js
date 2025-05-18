const db = require('../config/db');

const Usuarios = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM Usuario');
            //console.log("Usuarios obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron usuarios." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los usuarios: ", err);
            throw err;
        }
    },
    getById: async (usuario) => {
        try {
            const [rows] = await db.query('SELECT * FROM Usuario WHERE id = ?', [usuario.id]);
            //console.log("Usuarios obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron usuarios." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los usuarios: ", err);
            throw err;
        }
    },
    create: async (usuario) => {
        try {
            const [rows] = await db.query(
            'INSERT INTO Usuario (nombre, apellido, email, contraseña, rol) VALUES (?, ?, ?, ?, ?)',
            [usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña, usuario.rol]
        );
        if (rows.affectedRows > 0) {
            return { message: "Usuario creado exitosamente." };
        }
        return { error: "No se pudo crear el usuario." };
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.includes('email')) {
                return { error: "El correo electrónico ya está registrado." };
            }
            console.error("Error al crear el usuario: ", err);
            throw err;
        }
    },
    update: async (usuario) => {
        try {
            const [rows] = await db.query(
                "UPDATE Usuario SET nombre = ?, apellido = ?, email = ?, contraseña = ?, rol = ? WHERE email = ?",
                [usuario.nombre, usuario.apellido, usuario.email_nuevo, usuario.contraseña, usuario.rol, usuario.email]
            );
            console.log("Usuario actualizado");
            if (rows.affectedRows > 0) {
                return { message: "Usuario actualizado exitosamente." };
            }
            return rows;
        } catch (err) {
            console.error("Error al actualizar el usuario: ", err);
            throw err;
        }
    },
    remove: async (usuario) => {
        try {
            const [rows] = await db.query(
                "DELETE FROM Usuario WHERE email = ?",
                [usuario.email]
            );
            console.log("Usuario eliminado");
            if (rows.affectedRows > 0) {
                return { message: "Usuario eliminado exitosamente." };
            } else if (rows.affectedRows === 0) {
                return { message: "No se encontró el usuario." };
            }
            return rows;
        } catch (err) {
            console.error("Error al eliminar el usuario: ", err);
            throw err;
        }
    },
    desactiveUser: async (usuario) => {
        try {
            // LOGIN
            const [rows] = await db.query(
                "SELECT * FROM Usuario WHERE email = ? and contraseña = ?",
                [usuario.email, usuario.contraseña]
            );
            if (rows.length > 0) {
                // VALIDAMOS ROL y el estado del Reclutador 
                if (rows[0].rol === "Reclutador" && rows[0].estado === "Activo") {
                    // ACTUALIZAMOS ESTADO
                    const [update] = await db.query(
                        "UPDATE Usuario SET estado = ? WHERE email = ?",
                        [usuario.estado, usuario.email_modificar]
                    );
                    if (update.affectedRows === 1) {
                        return { message: `Usuario ${usuario.email_modificar} actualizado exitosamente.` };
                    }
                    return update;
                } else {
                    return { message: "El usuario no es Reclutador activo o no tiene permisos." };
                }
            }
            return { message: "Usuario no encontrado o credenciales incorrectas." };
        } catch (err) {
            console.error("Error al actualizar el usuario: ", err);
            throw err;
        }
    },
};

module.exports = Usuarios;