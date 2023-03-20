const { User, Post } = require('../models');

module.exports.createPost = async function (req, res) {
    const { Useruuid, body } = req.body;
    try {
        const user = await User.findOne({
            where: {
                uuid: Useruuid
            }
        });

        const post = await Post.create({
            userId: user.id,
            body
        })

        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}