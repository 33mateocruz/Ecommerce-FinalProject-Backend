const { Pedido, Comprador } = require("../models");

// Display a listing of the resource.
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

// Display the specified resource.
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

// Store a newly created resource in storage.
async function store(req, res) {
  const pedido = await Pedido.create({
    compradorId: req.body.compradorId,
    items: req.body.items,
    estado: req.body.estado,
  });
  res.status(201).json(pedido);
}

// Update the specified resource in storage.
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

// Remove the specified resource from storage.
async function destroy(req, res) {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  await pedido.destroy();
  res.status(204).send();
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
