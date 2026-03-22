import * as model from "../models/ubicaciones.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// ================= LISTADO =================
export const getUbicacionesController = async (req, res) => {
  try {
    const data = await model.getUbicaciones();

    res.status(200).json({
      message: "Ubicaciones obtenidas correctamente",
      total: data.length,
      data
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error al obtener ubicaciones" });
  }
};

// ================= POR ID =================
export const getUbicacionByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await model.getUbicacionById(id);

    if (!data) {
      return res.status(404).json({ message: "Ubicación no encontrada" });
    }

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ message: "Error al obtener ubicación" });
  }
};

// ================= CREAR =================
export const createUbicacionController = async (req, res) => {
  try {
    const id = await model.createUbicacion(req.body);

    res.status(201).json({
      message: "Ubicación creada correctamente",
      id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear ubicación" });
  }
};

// ================= ACTUALIZAR =================
export const updateUbicacionController = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await model.updateUbicacion(id, req.body);

    if (!actualizado) {
      return res.status(404).json({ message: "No se pudo actualizar" });
    }

    res.status(200).json({
      message: "Ubicación actualizada correctamente"
    });

  } catch (error) {
    res.status(500).json({ message: "Error al actualizar ubicación" });
  }
};

// ================= ELIMINAR =================
export const deleteUbicacionController = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await model.deleteUbicacion(id);

    if (!eliminado) {
      return res.status(404).json({ message: "No se pudo eliminar" });
    }

    res.status(200).json({
      message: "Ubicación eliminada correctamente"
    });

  } catch (error) {
    res.status(500).json({ message: "Error al eliminar ubicación" });
  }
};

export const login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        const usuario = await grupoModelo.findUsuarioByEmail(correo);
        if (!usuario) return res.status(401).json({ message: 'Credenciales inválidas' });

        const esValida = await bcrypt.compare(contrasena, usuario.Contrasena);
        if (!esValida) return res.status(401).json({ message: 'Credenciales inválidas' });

        const token = jwt.sign(
            { id: usuario.Id_Empleado, email: usuario.Correo, rol: usuario.Id_Tipo_Usuario },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        res.json({ token, usuario: { id: usuario.Id_Empleado, nombre: `${usuario.Nombre} ${usuario.Apellido_Paterno} ${usuario.Apellido_Materno}`, rol: usuario.Id_Tipo_Usuario } });
    } catch (error) {
        res.status(500).json({ error: 'Error en el proceso de login' });
    }
};