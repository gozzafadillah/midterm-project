const UserBusiness = require("../business/user.business");

class UserController {
  constructor() {
    this.userBusiness = new UserBusiness();
  }

  async getUsers(_, res) {
    const users = await this.userBusiness.getAllUsers();
    res.json(users);
  }

  async getUser(req, res) {
    const { id } = req.params;
    const user = await this.userBusiness.getUserById(id);
    res.json(user);
  }

  async createUser(req, res) {
    const { body: user } = req;
    const createdUser = await this.userBusiness.createUser(user);
    res.status(201).json(createdUser);
  }

  async login(req, res) {
    const { body: user } = req;
    const token = await this.userBusiness.login(user);
    const response = {
      token,
      user: {
        email: user.email,
      },
    };
    res.json({ response });
  }
}

module.exports = UserController;
