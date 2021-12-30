import editJsonFile from 'edit-json-file'

import { errorPage } from '../../pages/error/errorPage.js'

const checkExistUser = async () => {
        try {
                // get data.json
                let file = await editJsonFile(`./src/model/data.json`).get()

                // return
                return !!file.user.name

        } catch (error) {
                return errorPage(error, 'checkExistUser.js', 1)
        }
}

export { checkExistUser }