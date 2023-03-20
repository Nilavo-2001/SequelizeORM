const express = require('express');
const router = express.Router();
const { createUser, findAllUsers, findUser } = require('../controllers/users');
const { createPost } = require('../controllers/posts');
router.post('/createUser', createUser);
router.get('/getAllUsers', findAllUsers);
router.get('/getUser/:id', findUser)
router.post('/createPost', createPost)
module.exports = router;