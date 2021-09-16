const { Channel } = require('../models')
const { User } = require('../models')

const channelController = {
    async addUser(req, res) {
        const userId = req.decoded._id
        const userChannel = await User.findByPk(userId).then((user) =>
            user.setChannelUser('prueba'),
        )
    },
}

module.exports = channelController
