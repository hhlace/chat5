const Sequelize = require('sequelize')
const db = require('../db')

class Text extends Sequelize.Model {}

Text.init(
    {
        message: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { sequelize: db, modelName: 'text' },
)

module.exports = Text
