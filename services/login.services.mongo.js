const loginModel = require('../models/login.models.mongo');

class LoginService {
    static list(req, res) {
        return loginModel.find()
          .then((logins) => {
            res.status(200).json(logins);
          })
          .catch((error) => {
            res.status(500).json({ error: 'Error retrieving login data' });
          });
      }
    static check(data) {
      return loginModel.findOne({ usuario: data.usuario, senha: data.senha }).exec();
    }
}

module.exports = LoginService;