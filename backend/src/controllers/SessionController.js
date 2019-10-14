// index = retorna uma listagem (de sessões, nesse caso)
//show = retorna uma única sessão
//store = criar uma sessão
//update = alterar uma sessão
//destroy = remover uma sessão

const User = require('../models/User');

module.exports = {
  async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({ email });
        }

      

        return res.json(user);
    }

};