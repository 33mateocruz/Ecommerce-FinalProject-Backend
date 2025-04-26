const { Order, Comprador } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await order.findAll({
    include: [
      {
        model: Comprador,
        attributes: ["nombre", "apellido", "email"],
      },
    ],
  });
  res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const order = await Order.findByPk(req.params.id, {
    include: [
      {
        model: Comprador,
        attributes: ["nombre", "apellido", "email"],
      },
    ],
  });
  if (!order) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  res.json(order);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const order = await Order.create({
    compradorId: req.body.compradorId,
    items: req.body.items,
    estado: req.body.estado,
  });
  res.status(201).json(oreder);
}

// Update the specified resource in storage.
async function update(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (!order) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  await order.update({
    compradorId: req.body.compradorId,
    items: req.body.items,
    estado: req.body.estado,
  });
  res.json(order);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (!order) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  await order.destroy();
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
