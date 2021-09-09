const Sequelize = require('sequelize')
const db = require('../db')

class Media extends Sequelize.Model {}

Media.init(
    {
        files: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { sequelize: db, modelName: 'media' },
)

module.exports = Media