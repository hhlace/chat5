const { userService } = require('../services')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
require('dotenv').config()

const userController = {
    async register(req, res) {
        try {
            const exists = await userService.exists(req.userName)
            if (!exists) {
                const newUser = await userService.register(req.body)
                res.status(201).send(newUser)
            } else {
                res.status(401).send('El userName ya existe')
            }
        } catch (e) {
            console.log('ERROR => ', e)
            res.status(400).send('Error registrando usuario')
            throw e
        }
    },
    async login(req, res) {
        try {
            await User.findOne({
                where: { userName: req.body.userName },
            }).then((user) => {
                const validPass = user.validPassword(req.body.password)
                if (validPass) {
                    const token = jwt.sign(
                        { _id: user.id },
                        process.env.TOKEN_SECRET,
                    )
                    res.header('auth-token', token).send({
                        id: user.id,
                        userName: user.userName,
                    })
                } else {
                    res.status(404).send('Email o contraseña erroneo')
                }
            })
        } catch (e) {
            res.status(400).json({ success: false, error: e })
        }
    },
}

module.exports = userController
