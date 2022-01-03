import Sequelize from 'sequelize'

import { errorPage } from '../pages/error/errorPage.js'

//initialize database
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/data.db',
    logging: false
})

//try catch for connect database
try {
    db.authenticate();
} catch (error) {
    errorPage(error, 'welcomePage.js', 1)
}

export { db }