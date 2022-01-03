import terminal from 'terminal-kit'
const term = terminal.terminal

import { makeUser } from '../../helpers/auth/makeUser.js'
import { quit } from '../../helpers/quit.js'
import { errorPage } from '../error/errorPage.js'

const registerPage = async () => {
    //clear terminal
    console.clear()

    try {
        //title page
        term.bold().blue().bgBlack('\u{2630} Sign Up\n\n')

        //input name
        await term.white('\u{1F524} Please enter your name: ')
        await term.inputField({}, (error, input) => {
            if (error) return errorPage(error, 'registerPage.js', 1)
            
            //switch for control commend
            switch (input) {
                //- if input is empty go to errorPage
                case "":
                    return errorPage("No value sent", 'registerPage.js', 1)
                //- exit 
                case "exit":
                case "EXIT":
                    return quit()
                //- sent input to makeUser
                default:
                    return makeUser(input)
            }

        })
    } catch (error) {
        return errorPage(error, 'registerPage.js', 1)
    }


}

export { registerPage }