import terminal from 'terminal-kit'
const term = terminal.terminal

import { errorPage } from '../error/errorPage.js'
import { profilePage } from './profilePage.js'
import { checkeredPage } from '../checkered/checkeredPage.js'
import { quit } from '../../helpers/quit.js'

const menuPage = async () => {
    //clear terminal
    console.clear()

    try {
        // item menu
        var items = [
            '- Play Game',
            '- Profile',
            '- Quit'
        ];

        // print Main Menu
        term.bold().underline().blue().bgBlack( '\u{2630} ^GM^ra^Yi^un ^MM^be^bn^cu\n')

        //menu
        await term.singleColumnMenu(items, (error, response) => {
            if (error) return errorPage(error, 'showMenu.js', 1)

            //switch to control item in menu
            switch (response.selectedIndex) {
                case 0:
                    return checkeredPage()
                case 1:
                    return profilePage()
                case 2:
                    return quit()

                default:
                    return menuPage()
            }
        });

    } catch (error) {
        return errorPage(error, 'menuPage.js', 1)
    }
}

export { menuPage }