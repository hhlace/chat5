const { userService } = require('../services')

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
            const user = await User.findOne({
                where: { userName: req.userName },
            }).then((user) => {
                // Aca falta codigo login
                res.sendStatus(200)
            })
        } catch (e) {
            res.status(400).json({ success: false, error: e })
        }
    },
}

module.exports = userController
