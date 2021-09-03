const { User } = require('../models')

const userService = {
    async register(user) {
        try {
            const newUser = await User.create(user)
            if (newUser) return newUser
        } catch (e) {
            console.log('ERROR => ', e)
            res.status(400).send('Error registrando usuario - Service')
            throw e
        }
    },
    async exists(userName) {
        try {
            const user = await User.findOne({ where: { userName: userName } })
            if (user) return true
            return false
        } catch (e) {
            return false
        }
    },
}
module.exports = userService
