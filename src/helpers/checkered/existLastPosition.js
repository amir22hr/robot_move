import { checkeredPage } from '../../pages/checkered/checkeredPage.js'
import { findOneUser } from '../auth/findOneUser.js'
import { errorPage } from '../../pages/error/errorPage.js'

const existLastPosition = async (UserName) => {

    try {
        //find user with name
        let user = await findOneUser(UserName)

        try {
            //extracting the data
            let valueSplit = await user.last_position.split('-')
            // go to checkeredPage with parameters
            return checkeredPage(Number(valueSplit[0]), Number(valueSplit[1]), String(valueSplit[2]), UserName)
        } catch {
            // go to checkeredPage
            return checkeredPage(
                0,
                0,
                '^y\u{1403}',
                UserName
            )
        }


    } catch (error) {
        return errorPage(error, 'existLastPosition.js', 1)
    }

}

export { existLastPosition }