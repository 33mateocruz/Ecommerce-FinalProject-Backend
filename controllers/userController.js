const { User } = require("../models");

async function index(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los compradores" });
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Comprador no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el comprador" });
  }
}

async function store(req, res) {
  try {
    const { nombre, apellido, email, direccion, telefono, pedidos, password } = req.body;
    const newUser = new User({ nombre, apellido, email, direccion, telefono, pedidos, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el comprador" });
  }
}

async function update(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "Comprador no encontrado" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el comprador" });
  }
}

async function destroy(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "Comprador no encontrado" });
    res.json({ message: "Comprador eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el comprador" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
