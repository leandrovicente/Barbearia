const { User } = require("../models");
class DashBoardController {
  async index(req, res) {
    const providers = await User.findAll({ where: { provider: true } });
    res.render("dashboard", { providers });
  }
}

module.exports = new DashBoardController();
