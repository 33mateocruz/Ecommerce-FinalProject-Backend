const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

async function logIn(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      console.log(user.password, password, match);
      if (match) {
        const token = jwt.sign({ sub: user.id, role: 1 }, process.env.JWT_SECRET);
        return res.json({ token: token });
      } else {
        return res.status(401).json({ error: "su contra no coincide" });
      }
    } else {
      return res.status(401).json({ error: "no se encontró cuenta" });
    }
  } catch (error) {
    console.error("no se encuentra conexión", error);
    res.status(500).json({ error: "no se encuentra conexión" });
  }
}

module.exports = {
  logIn,
};
