const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const channelRoutes = require('./channel')

router.use('/user', userRoutes)

router.use('/channel', channelRoutes)

module.exports = router
