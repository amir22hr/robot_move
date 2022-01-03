import { CheckeredBuilder } from './CheckeredBuilder.js'
import { reportRobot } from './reportRobot.js'
import { commendRobot } from './commendRobot.js'
import { errorPage } from '../error/errorPage.js'


const checkeredPage = async (
    _axisX = 0,
    _axisY = 0,
    _Direction = '^y\u{1403}',
    UserName
) => {

    //clear terminal
    console.clear()

    //checkered
    try {

        //Checkered Page Builder
        await CheckeredBuilder(_axisX, _axisY, _Direction)

        //Location now || Report 
        await reportRobot(_axisX, _axisY, _Direction)

        //commend input
        await commendRobot(_axisX, _axisY, _Direction, UserName)


    } catch (error) {
        return errorPage(error, 'checkeredPage.js', 1)
    }
}

export { checkeredPage }