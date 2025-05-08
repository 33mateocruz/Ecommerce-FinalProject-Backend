const { default: bcrypt } = require("bcryptjs");
const { User } = require("../models");

async function logIn(req, res) {
  try {
    const { email, password } = req.body;
    const user = User.findOne({ where: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ sub: user.id }, "UnStringMuySecreto");
        return res.json({ token: token });
      } else {
        return res.status(401).json({ error: "su contra no coincide" });
      }
    } else {
      return res.status(401).json({ error: "no se encontro cuenta" });
    }
  } catch {
    console.error("no se encuentra conexion", error);
    res.status(500).json({ error: "no se encuentra conexion" });
  }
}

module.exports = {
  logIn,
};
