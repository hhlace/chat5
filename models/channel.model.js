const Sequelize = require('sequelize')
const db = require('../db')

class Channel extends Sequelize.Model {}

Channel.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
                this.setDataValue('name', val.toLowerCase())
            },
        },
        admin: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { sequelize: db, modelName: 'channel' },
)

module.exports = Channel
