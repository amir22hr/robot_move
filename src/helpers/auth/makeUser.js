import editJsonFile from 'edit-json-file'

import { errorPage } from '../../pages/error/errorPage.js'
import { menuPage } from '../../pages/menu/menuPage.js'

const makeUser = async (input) => {

    try {
        //get data.json
        let file = await editJsonFile(`./src/model/data.json`);
        //set name to data.json
        await file.set('user.name', input.toString())
        //save changes
        await file.save()

        //go to menu
        return await menuPage()

    } catch (error) {
        return errorPage(error, 'makeUser.js', 1)
    }
    
}

export { makeUser }