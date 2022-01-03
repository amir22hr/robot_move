import { welcomePage } from '../../pages/welcomePage.js'
import { Users } from '../../model/Users.js';
import { errorPage } from '../../pages/error/errorPage.js'

const deleteAccount = async (UserName) => {

    try {
        // delete user account
        await Users.destroy({
            where: {
                name: UserName
            }
        })
        //Account deletion was successful
        //return to welcomePage
        return welcomePage()

    } catch (error) {
        return errorPage(error, 'deleteAccount.js', 1)
    }
}

export { deleteAccount }