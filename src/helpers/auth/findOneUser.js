import { Users } from '../../model/Users.js'
import { errorPage } from '../../pages/error/errorPage.js'

const findOneUser = async (UserName) => {

    try {
        //find one user
        let OneUser = await Users.findOne({
            where: {
                name: UserName
            }
        })

        // return showUsersPage with parameters
        return OneUser

    } catch (error) {
        return errorPage(error, 'findOneUser.js', 1)
    }
}

export { findOneUser }