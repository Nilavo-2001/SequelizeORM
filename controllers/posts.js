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

module.exports.findAllPosts = async function (req, res) {
    try {
        let posts = await Post.findAll({ include: User });
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }

}