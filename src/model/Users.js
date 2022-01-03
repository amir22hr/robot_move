import { DataTypes } from 'sequelize'

import { db } from '../config/sequelize.js'

//Users model
const Users = db.define('users', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_position: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_login: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false
})

export { Users };