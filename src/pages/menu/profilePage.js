import terminal from 'terminal-kit'
const term = terminal.terminal

import { menuPage } from './menuPage.js'
import { deletePage } from '../auth/deletePage.js'
import { errorPage } from '../error/errorPage.js'
import { quit } from '../../helpers/quit.js'
import { findAllUsers } from '../../helpers/auth/findAllUsers.js'
import { findOneUser } from '../../helpers/auth/findOneUser.js'

const profilePage = async (UserName) => {
    //clear terminal
    console.clear()

    try {
        //find user
        let user = await findOneUser(UserName)

        // show picture user
        await term.drawImage('./src/public/image/profile.png', {
            shrink: {
                width: term.width,
                height: term.height,
            }
        })

        // info user table
        await term.table([
            ['name', 'last_position', 'last_login'],
            [user.name, user.last_position, user.last_login],
        ], {
            hasBorder: true,
            contentHasMarkup: true,
            borderAttr: { color: 'yellow' },
            width: term.width,
            fit: true
        })

        // menu items
        var items = [
            '- Delete Account',
            '- Menu',
            '- Switch User',
            '- Quit'
        ];
        //show menu items
        await term.singleColumnMenu(items, (error, response) => {
            if (error) return errorPage(error, 'profile.js', 1)

            //switch to control item in menu
            switch (response.selectedIndex) {
                //- go to deletePage for delete user account
                case 0:
                    return deletePage(UserName)
                //- go to menuPage
                case 1:
                    return menuPage(UserName)
                //- switch user account
                case 2:
                    return findAllUsers()
                //- exit app
                case 3:
                    return quit(UserName)
                //- go back to profilePage
                default:
                    return profilePage(UserName)
            }
        })

    } catch (error) {
        return errorPage(error, 'profilePage.js', 1)
    }

}

export { profilePage }