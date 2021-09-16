const User = require('./user.model')
const Text = require('./text.model')
const Post = require('./post.model')
const Poll = require('./poll.model')
const Media = require('./media.model')
const Event = require('./event.model')
const Channel = require('./channel.model')

User.belongsToMany(Channel, { through: 'ChannelUsers' })

module.exports = { User, Text, Post, Poll, Media, Event, Channel }
