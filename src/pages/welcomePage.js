import terminal from 'terminal-kit'
const term = terminal.terminal

import { findAllUsers } from '../helpers/auth/findAllUsers.js'
import { errorPage } from './error/errorPage.js'

const welcomePage = async () => {
    //clear terminal
    console.clear()

    try {
        // box welcome
        await term.table([
            ["Fantastic Motion Robot"]
        ], {
            hasBorder: true,
            textAttr: { color: 'white' },
            width: term.width,
            fit: true,
        })

        // message: Have Fun!
        await term.slowTyping(
            "\t Have Fun!  \n",
            {
                flashStyle: term.brightWhite,
                style: term.red,
            },
            function () {
                // go to findAllUsers
                return findAllUsers()
            }
        );

    } catch (error) {
        return errorPage(error, 'welcomePage.js', 1)
    }
}

export { welcomePage }