const Sequelize = require('sequelize')
const db = require('../db')

class Event extends Sequelize.Model {}

Event.init(
    {
        startDate: {
            type: Sequelize.DATE,
            allowNull: false,
            field:'start_date'
        },
        endDate:{
            type: Sequelize.DATE,
            allowNull: false,
            field:'end_date'
        },
        location:{
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
                this.setDataValue('location', val.toLowerCase())
            },
        },
        response:{
            type:Sequelize.BOOLEAN,
        }
    },
    { sequelize: db, modelName: 'event' },
)

module.exports = Event
