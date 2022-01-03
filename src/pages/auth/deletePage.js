import terminal from 'terminal-kit'
const term = terminal.terminal

import { deleteAccount } from '../../helpers/auth/deleteAccount.js'
import { profilePage } from '../menu/profilePage.js'
import { errorPage } from '../../pages/error/errorPage.js'

const deletePage = (UserName) => {
    //clear terminal
    console.clear()

    try {

        // yes or no for delete account
        term('\u{26A0} Do you want to Delete Account? [Y|n]\n');
        term.yesOrNo({ yes: ['y', 'ENTER'], no: ['n'] }, function (error, result) {
            if (error) return errorPage(error, 'deletePage.js', 1)

            if (result) {
                //go to deleteAccount
                return deleteAccount(UserName)
            }
            else {
                //go back to profilePage
                return profilePage(UserName)
            }
        });

    } catch (error) {
        return errorPage(error, 'deletePage.js', 1)
    }
}

export { deletePage }