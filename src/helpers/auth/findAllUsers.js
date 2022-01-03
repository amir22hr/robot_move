import { Users } from '../../model/Users.js'
import { showUsersPage } from '../../pages/auth/showUsersPage.js'
import { errorPage } from '../../pages/error/errorPage.js'

const findAllUsers = async () => {

        try {
                //find all user
                let allUsers = await Users.findAll()

                // return showUsersPage with parameters
                return showUsersPage(allUsers)

        } catch (error) {
                return errorPage(error, 'findAllUsers.js', 1)
        }
}

export { findAllUsers }