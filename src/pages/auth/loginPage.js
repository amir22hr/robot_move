import terminal from 'terminal-kit'
const term = terminal.terminal

import { checkExistUser } from '../../helpers/auth/checkExistUser.js'
import { makeUser } from '../../helpers/auth/makeUser.js'
import { menuPage } from '../menu/menuPage.js'
import { errorPage } from '../error/errorPage.js'
import { quit } from '../../helpers/quit.js'

const loginPage = async () => {

    //clear
    console.clear()

    try {
        //check Exist User
        const user = await checkExistUser()
        if (!!user) return menuPage()

        //input name
        await term('\u{1F524} Please enter your name: ');
        await term.inputField({}, (error, input) => {
            if (error) return errorPage(error, 'loginPage.js', 1)
            
            //switch for control commend
            switch (input) {
                //- if input is empty go to errorPage
                case "":
                    return errorPage("No value sent", 'loginPage.js', 1)
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
        return errorPage(error, 'loginPage.js', 1)
    }


}

export { loginPage }