import terminal from 'terminal-kit'
const term = terminal.terminal

import { loginPage } from './auth/loginPage.js'

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

        // text welcome
        await term.slowTyping(
            "\t Have Fun!  \n",
            {
                flashStyle: term.brightWhite,
                style: term.red,
            },
            function () {
                return loginPage()
            }
        );

    } catch (error) {
        return errorPage(error, 'welcomePage.js', 1)
    }
}

export { welcomePage }