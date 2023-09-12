const {User: User} = require('../models/User');

const userController = {

    async create(req, res) {
        const {name, email, password} = req.body;
        try {
            const user = await User.create({name, email, password});
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async read(req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async update(req, res) {
        const {name, email, password} = req.body;
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {name, email, password}, {new: true});
            return res.status(200).json(user);
        }catch(error){
            return res.status(500).json(error);
        }
    },

    async delete(req, res) {
        try{
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json({message: 'Usuário deletado com sucesso'});
        }catch(error){
            return res.status(500).json(error);
        }
    }


};

module.exports = userController;