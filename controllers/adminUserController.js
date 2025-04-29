const { AdminUser } = require("../models");
const bcrypt = require("bcrypt");

async function index(req, res) {
  try {
    const admins = await AdminUser.findAll();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los administradores" });
  }
}

async function show(req, res) {
  try {
    const admin = await AdminUser.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Administrador no encontrado" });
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el administrador" });
  }
}

async function store(req, res) {
  try {
    const { nombre, apellido, email, contraseña } = req.body;
    const hashed = await bcrypt.hash(contraseña, 10);
    const newAdmin = await AdminUser.create({ nombre, apellido, email, contraseña: hashed });
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el administrador" });
  }
}

async function update(req, res) {
  try {
    const data = req.body;
    if (data.contraseña) {
      data.contraseña = await bcrypt.hash(data.contraseña, 10);
    }

    const [affectedRows] = await AdminUser.update(data, { where: { id: req.params.id } });
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Administrador no encontrado" });
    }

    const updatedAdmin = await AdminUser.findByPk(req.params.id);
    res.json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el administrador" });
  }
}

async function destroy(req, res) {
  try {
    const deleted = await AdminUser.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Administrador no encontrado" });
    res.json({ message: "Administrador eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el administrador" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
