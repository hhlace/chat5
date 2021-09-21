const { Channel } = require('../models')
const { User } = require('../models')

const channelController = {
    async newChannel(req, res) {
        const userId = req.decoded._id
        const addingUser = await User.findByPk(userId)
        const userToAdd = await User.findByPk(req.body.userId)
        const newChannel = await Channel.create({
            name: req.body.name,
            admin: userId,
        })
        newChannel.addUsers([addingUser, userToAdd])
        if (newChannel) res.status(201).send(newChannel)
    },
    async addUser(req, res) {
        const userId = req.decoded._id
        const channelToAdd = await Channel.findOne({
            where: { id: req.body.channelId },
        })
            .then((channel) => {
                if (channel.dataValues.admin == userId) {
                    channel.addUsers([req.body.userId])
                    res.status(201).send(channel)
                }
            })
            .catch((e) => console.log('Error agregando usuario', e))
    },
    async getChannels(req, res) {
        const userId = req.decoded._id
        const channelsIds = await User.findByPk(userId, {
            include: Channel,
        })
            .then((user) => user.channels)
            .then((channels) =>
                channels.map((channel) => channel.dataValues.id),
            )
        console.log('🚀🚀 \n ---> channelsIds', channelsIds)

        const channels = await channelsIds.map((channel) =>
            Channel.findByPk(channel),
        )

        const channelsPromise = await Promise.all(channels)
        res.send(channelsPromise)
    },
}

module.exports = channelController
