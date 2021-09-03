const express = require('express')
const router = express.Router()
const { userController } = require('../controllers')

router.post('/register', userController.register)

router.post('/login', userController.login)

/* router.post('/create', customerController.create)

router.delete('/:id', customerController.delete)

router.get('/:id', customerController.findOne) */

module.exports = router
