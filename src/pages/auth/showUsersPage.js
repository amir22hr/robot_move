import terminal from 'terminal-kit'
const term = terminal.terminal

import { menuPage } from '../menu/menuPage.js'
import { errorPage } from '../error/errorPage.js'
import { registerPage } from './registerPage.js'
import { quit } from '../../helpers/quit.js'

const showUsersPage = async (allUsers) => {
    //clear terminal
    console.clear()

    try {
        // item menu
            // first item [create new user]
        var items = ['--Create New User--']
            // push all user name to items
        await allUsers.forEach(user => {
            items.push(`\u{1F464} ${user.name}`)
        });
            // append quit to last item
        await items.push(`--Quit--`)

        // print Main Menu, title Page
        await term.bold().underline().blue().bgBlack('\u{2630} Select User To Login\n')

        //menu
        await term.bold().white().singleColumnMenu(items, async (error, response) => {
            if (error) return errorPage(error, 'showMenu.js', 1)

            //switch to control item in menu
            switch (response.selectedText) {
                //create new user
                case '--Create New User--':
                    return registerPage()
                //exit app
                case '--Quit--':
                    return quit()

                //login as user
                default:
                    //to separate an emoji from a name
                    let spiltUser = await response.selectedText.split(' ')[1]
                    return await menuPage(spiltUser)
            }
        });

    } catch (error) {
        return errorPage(error, 'showUsersPage.js', 1)
    }

}

export { showUsersPage }