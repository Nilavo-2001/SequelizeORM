const { User } = require('../models');

module.exports.createUser = async function (req, res) {
    const { name, email, role } = req.body;
    try {
        let user = await User.create({ name, email, role });
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }

}

module.exports.findAllUsers = async function (req, res) {
    try {
        let users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }
}

module.exports.findUser = async function (req, res) {
    const id = req.params.id;
    try {
        let users = await User.findOne({
            where: {
                uuid: id
            }
        })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }
}