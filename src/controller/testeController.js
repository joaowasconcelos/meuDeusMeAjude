const testeModel = require("../model/cliente");

const testeController = {
    
    listarTodasP: async (req, res) => {
        try {
            const testelistar = await testeModel.listarTodasPessoas;
            return res.json(testelistar);

        } catch (error) {
            throw error
        }

    },
}
module.exports = testeController;