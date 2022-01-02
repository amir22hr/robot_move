import editJsonFile from 'edit-json-file'

import { checkeredPage } from '../../pages/checkered/checkeredPage.js'
import { errorPage } from '../../pages/error/errorPage.js'

const existLastPosition = async () => {

    try {
        //get data.json
        let file = await editJsonFile(`./src/model/data.json`).get()
        let valueSplit = await file.last_position.split('-')
        //if exist return true 
        if (!!valueSplit) {
            // go to checkeredPage with parameters
            return await checkeredPage(Number(valueSplit[0]), Number(valueSplit[1]), String(valueSplit[2]))
        }
        //else return false
        else {
            // go to checkeredPage with out parameters
            return checkeredPage()
        }

    } catch (error) {
        return errorPage(error, 'existLastPosition.js', 1)
    }

}

export { existLastPosition }