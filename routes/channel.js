const express = require('express')
const router = express.Router()
const { channelController } = require('../controllers')
const jwtMiddleware = require('../middleware/auth.middleware')

router.post(
    '/adduser',
    jwtMiddleware.validateAuthentication,
    channelController.addUser,
)

module.exports = router
