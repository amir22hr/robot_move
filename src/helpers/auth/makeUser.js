import { menuPage } from '../../pages/menu/menuPage.js'
import { findOneUser } from './findOneUser.js'
import { Users } from '../../model/Users.js'
import { errorPage } from '../../pages/error/errorPage.js'

const makeUser = async (input) => {

    try {
        //duplicate user
        let duplicateUser = await findOneUser(input)

        // if there was a user
        if (!!duplicateUser) {
            return errorPage('Exist user with this name', 'makeUser.js', 1)
        }

        //create user
        await Users.create({
            name: input
        })

        //go to menu
        return menuPage(input)

    } catch (error) {
        return errorPage(error, 'makeUser.js', 1)
    }

}

export { makeUser }