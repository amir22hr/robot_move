import editJsonFile from 'edit-json-file'
import date from 'date-and-time';

import { errorPage } from '../pages/error/errorPage.js'

const quit = async () => {

    //clear
    console.clear()

    try {
        //get data.json
        let file = await editJsonFile(`./src/model/data.json`);
        let getData = file.get()
        //check user exist
        if (getData.user.name) {
            //set date to data.json
            await file.append('last_login', date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'))
            //save changes
            await file.save()
        }

    } catch (error) {
        return errorPage(error, 'quit.js', 1)
    }

    //exit app
    await process.exit(0)
}

export { quit }