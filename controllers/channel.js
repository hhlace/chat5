const { Channel } = require('../models')
const { User } = require('../models')

const channelController = {
    async newChannel(req, res) {
        const userId = req.decoded._id
        const newChannel = Channel.create({
            name: req.body.name,
            admin: userId,
        })
        if (newChannel) res.status(201).send(newChannel)
    },
    async addUser(req, res) {
        const userId = req.decoded._id
        const channel = await Channel.findOne({
            where: { id: req.body.channelId },
        }).then((channelToAdd) => {
            channelToAdd.setUser(req.body.userId)
        })
        if (channel) res.status(201).send(channel)
    },
}

module.exports = channelController
