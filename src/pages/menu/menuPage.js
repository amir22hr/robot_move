import terminal from 'terminal-kit'
const term = terminal.terminal

import { profilePage } from './profilePage.js'
import { existLastPosition } from '../../helpers/checkered/existLastPosition.js'
import { findAllUsers } from '../../helpers/auth/findAllUsers.js'
import { quit } from '../../helpers/quit.js'
import { errorPage } from '../error/errorPage.js'

const menuPage = async (UserName) => {
    //clear terminal
    console.clear()

    try {
        // item menu
        var items = [
            '- Play Game',
            '- Profile',
            '- Switch User',
            '- Quit'
        ];

        // print Main Menu
        term.bold().underline().blue().bgBlack('\u{2630} ^GM^ra^Yi^un ^MM^be^bn^cu\n')

        //menu
        await term.singleColumnMenu(items, (error, response) => {
            if (error) return errorPage(error, 'showMenu.js', 1)

            //switch to control item in menu
            switch (response.selectedIndex) {
                //- go to checkered game
                case 0:
                    return existLastPosition(UserName)
                //- go to profilePage
                case 1:
                    return profilePage(UserName)
                //- Switch User Account
                case 2:
                    return findAllUsers()
                //- Exit app
                case 3:
                    return quit(UserName)
                //- go to menuPage
                default:
                    return menuPage(UserName)
            }
        });

    } catch (error) {
        return errorPage(error, 'menuPage.js', 1)
    }
}

export { menuPage }