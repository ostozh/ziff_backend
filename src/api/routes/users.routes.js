const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers/users.controller'),
    UserService = require('../services/users.service');

router.use(async (req, res, next) => {
    console.log('Time: ', Date.now())
    next()

})

router.post('/signup', async (req, res) => {
    await UserController.createUser(req, res)

})

router.post('/signin', async (req, res) => {
    await UserController.authUser(req, res)

})

router.post('/updateUser', async (req, res) => {
    await UserController.updateUser(req, res)

})

router.post('/deleteUser', async (req, res) => {
    await UserController.deleteUser(req, res)

})

router.post('/leaveUser', async (req, res) => {
    await UserController.leaveUser(req, res)

})

module.exports = router