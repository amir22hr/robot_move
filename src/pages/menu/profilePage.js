import editJsonFile from 'edit-json-file'
import date from 'date-and-time';
import terminal from 'terminal-kit'
const term = terminal.terminal

import { menuPage } from './menuPage.js';
import { deletePage } from '../auth/deletePage.js'
import { errorPage } from '../error/errorPage.js'
import { quit } from '../../helpers/quit.js'

const profilePage = async () => {

    //clear terminal
    console.clear()

    try {

        // get data.json
        let file = await editJsonFile(`./src/model/data.json`).get();

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
            [file.user.name, file.last_position, file.last_login],
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
            '- Quit'
        ];
        //show menu items
        await term.singleColumnMenu(items, (error, response) => {
            if (error) return errorPage(error, 'profile.js', 1)

            //switch to control item in menu
            switch (response.selectedIndex) {
                case 0:
                    return deletePage()
                case 1:
                    return menuPage()
                case 2:
                    return quit()

                default:
                    return profilePage()
            }
        })

    } catch (error) {
        return errorPage(error, 'profilePage.js', 1)
    }

}

export { profilePage }