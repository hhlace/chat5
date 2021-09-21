const express = require('express')
const router = express.Router()
const { channelController } = require('../controllers')
const jwtMiddleware = require('../middleware/auth.middleware')

router.post(
    '/newchannel',
    jwtMiddleware.validateAuthentication,
    channelController.newChannel,
)

router.post(
    '/adduser',
    jwtMiddleware.validateAuthentication,
    channelController.addUser,
)

router.get(
    '/getchannels',
    jwtMiddleware.validateAuthentication,
    channelController.getChannels,
)

module.exports = router
