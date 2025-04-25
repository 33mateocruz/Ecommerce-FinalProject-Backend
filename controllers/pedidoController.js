const { Pedido, Comprador } = require("../models");


async function index(req, res) {
  const pedidos = await Pedido.findAll({
    include: [
      {
        model: Comprador,
        attributes: ["nombre", "apellido", "email"],
      },
    ],
  });
  res.json(pedidos);
}


async function show(req, res) {
  const pedido = await Pedido.findByPk(req.params.id, {
    include: [
      {
        model: Comprador,
        attributes: ["nombre", "apellido", "email"],
      },
    ],
  });
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  res.json(pedido);
}


async function store(req, res) {
  const pedido = await Pedido.create({
    compradorId: req.body.compradorId,
    items: req.body.items,
    estado: req.body.estado,
  });
  res.status(201).json(pedido);
}


async function update(req, res) {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  await pedido.update({
    compradorId: req.body.compradorId,
    items: req.body.items,
    estado: req.body.estado,
  });
  res.json(pedido);
}


async function destroy(req, res) {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  await pedido.destroy();
  res.status(204).send();
}


module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
