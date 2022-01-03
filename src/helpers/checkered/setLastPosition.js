import { Users } from '../../model/Users.js'
import { errorPage } from '../../pages/error/errorPage.js'

const setLastPosition = async (_axisX, _axisY, _Direction, UserName) => {

    try {
        //update last_position of user
        await Users.update(
            { last_position: `${_axisX}-${_axisY}-${_Direction}` },
            {
                where: {
                    name: UserName
                }
            }
        )

    } catch (error) {
        return errorPage(error, 'setLastPosition.js', 1)
    }

}

export { setLastPosition }