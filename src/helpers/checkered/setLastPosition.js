import editJsonFile from 'edit-json-file'

import { errorPage } from '../../pages/error/errorPage.js'

const setLastPosition = async (_axisX, _axisY, _Direction) => {

    try {

        //get data.json
        let file = await editJsonFile(`./src/model/data.json`);
        //set date to data.json
        await file.set('last_position', `${_axisX}-${_axisY}-${_Direction}`)
        //save changes
        await file.save()


    } catch (error) {
        return errorPage(error, 'setLastPosition.js', 1)
    }

}

export { setLastPosition }