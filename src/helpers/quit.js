import date from 'date-and-time'

import { errorPage } from '../pages/error/errorPage.js'
import { Users } from '../model/Users.js'

const quit = async (UserName) => {

    //clear
    console.clear()

    try {
        // if there was data
        if (UserName) {
            //find user and update date
            await Users.update(
                { last_login: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss') },
                { where: { name: UserName } }
            )
        }

    } catch (error) {
        return errorPage(error, 'quit.js', 1)
    }

    //exit app
    await process.exit(0)
}

export { quit }