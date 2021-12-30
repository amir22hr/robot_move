import editJsonFile from 'edit-json-file'

import { errorPage } from '../../pages/error/errorPage.js'
import { welcomePage } from '../../pages/welcomePage.js';

const deleteAccount = async () => {

    try {

        // get data.json
        let file = await editJsonFile(`./src/model/data.json`);
        // delete account
        await file.set("user.name", "");
        await file.set("last_position", "");
        await file.set("last_login", []);
        //save changes
        await file.save()

        //return to welcomePage
        return welcomePage()
    } catch (error) {
        return errorPage(error, 'deleteAccount.js', 1)
    }
}

export { deleteAccount }