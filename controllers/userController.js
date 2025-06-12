const { default: bcrypt } = require("bcryptjs");
const { User } = require("../models");

async function index(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
}

async function show(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
}

async function store(req, res) {
  try {
    const { name, surname, email, address, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      surname,
      email,
      address,
      phone,
      hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el usuario" });
  }
}

async function update(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el usuario" });
  }
}

async function destroy(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    await user.destroy();
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
