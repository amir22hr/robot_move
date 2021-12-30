import editJsonFile from 'edit-json-file'

import { errorPage } from '../error/errorPage.js'

const lastPositionRobot = async (_axisX, _axisY, _Direction) => {

    try {

        //get data.json
        let file = await editJsonFile(`./src/model/data.json`);
        //set date to data.json
        await file.set('last_position', `${_axisX}-${_axisY}-${_Direction}`)
        //save changes
        await file.save()


    } catch (error) {
        return errorPage(error, 'lastPositionRobot.js', 1)
    }

}

export { lastPositionRobot }