const Sequelize = require('sequelize')
const db = require('../db')

class Poll extends Sequelize.Model {}

Poll.init(
    {
        content:{
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
                this.setDataValue('content', val.toLowerCase())
            },
        },
    },
    { sequelize: db, modelName: 'poll' },
)

module.exports = Poll
