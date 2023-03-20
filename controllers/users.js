const { User, Post } = require('../models');

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
        let users = await User.findAll({ include: Post });
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
        let user = await User.findOne({
            where: {
                uuid: id
            }
        })
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }
}

module.exports.deleteUser = async function (req, res) {
    const id = req.params.id;
    try {
        await User.destroy({
            where: {
                uuid: id
            }
        })
        return res.status(200).json({
            message: "Deleted sucessfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }
}

module.exports.updateUser = async function (req, res) {
    const id = req.params.id;
    const { name, email, role } = req.body;
    try {
        let user = await User.findOne({
            where: {
                uuid: id
            }
        })

        user.name = name;
        user.email = email;
        user.role = role;
        await user.save()
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }
}