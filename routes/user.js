const express = require('express')
const router = express.Router()
const { userController } = require('../controllers')
const jwtMiddleware = require('../middleware/auth.middleware')

router.post('/register', userController.register)

router.post('/login', userController.login)

router.get(
    '/getuser',
    jwtMiddleware.validateAuthentication,
    userController.getUser,
)

/* router.post('/create', customerController.create)

router.delete('/:id', customerController.delete)

router.get('/:id', customerController.findOne) */

module.exports = router
