const { AdminUser } = require("../models");
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
  try {
    const data = req.body;
    data.contraseña = await bcrypt.hash(data.contraseña, 10);
    const admin = await AdminUser.create(data);
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  const admins = await AdminUser.findAll();
  res.json(admins);
};

exports.getOne = async (req, res) => {
  const admin = await AdminUser.findByPk(req.params.id);
  if (!admin) return res.status(404).json({ error: "No encontrado" });
  res.json(admin);
};

exports.update = async (req, res) => {
  const data = req.body;
  if (data.contraseña) {
    data.contraseña = await bcrypt.hash(data.contraseña, 10);
  }
  await AdminUser.update(data, { where: { id: req.params.id } });
  const updated = await AdminUser.findByPk(req.params.id);
  res.json(updated);
};

exports.remove = async (req, res) => {
  const deleted = await AdminUser.destroy({ where: { id: req.params.id } });
  if (!deleted) return res.status(404).json({ error: "No encontrado" });
  res.status(204).send();
};
