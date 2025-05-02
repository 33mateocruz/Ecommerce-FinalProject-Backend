const { Order, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          as: "comprador",
          attributes: ["name", "surname", "email"],
        },
      ],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "comprador",
          attributes: ["name", "surname", "email"],
        },
      ],
    });
    if (!order) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el pedido" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const order = await Order.create({
      compradorId: req.body.compradorId,
      nombreProducto: req.body.nombreProducto,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      estado: req.body.estado,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el pedido" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    await order.update({
      compradorId: req.body.compradorId,
      nombreProducto: req.body.nombreProducto,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      estado: req.body.estado,
    });
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el pedido" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el pedido" });
  }
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
