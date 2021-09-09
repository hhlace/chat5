const Sequelize = require('sequelize')
const db = require('../db')

class Post extends Sequelize.Model {}

Post.init(
    {
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        type: {
            type: Sequelize.ENUM(["text", "event", "poll", "media"]),
        },
    },
    { sequelize: db, modelName: 'post' },
)

module.exports = Post
