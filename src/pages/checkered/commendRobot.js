import terminal from 'terminal-kit'
const term = terminal.terminal

import { menuPage } from '../menu/menuPage.js'
import { checkeredPage } from './checkeredPage.js'
import { setLastPosition } from '../../helpers/checkered/setLastPosition.js'
import { quit } from '../../helpers/quit.js'
import { errorPage } from '../error/errorPage.js'

const commendRobot = async (_axisX, _axisY, _Direction, UserName) => {

    //update last_position
    await setLastPosition(_axisX, _axisY, _Direction, UserName)

    //Robot character unicode
    const robotUP = '^y\u{1403}';
    const robotDOWN = '^y\u{1401}';
    const robotRIGHT = '^y\u{1405}';
    const robotLEFT = '^y\u{140A}';

    //Direction
    var DirectionX = _axisX;
    var DirectionY = _axisY;

    try {

        //inputField
        await term.bgBlack().yellow()('\n\n\u{1F916}commend: ')
        await term.inputField({}, async (error, input) => {
            if (error) return errorPage(error, 'checkeredPage.js', 1)

            //switch for control commend
            switch (input) {
                //- if input is empty go to errorPage
                case "":
                    return checkeredPage(
                        DirectionX,
                        DirectionY,
                        _Direction,
                        UserName
                    )
                //- exit
                case "exit":
                case "EXIT":
                    return await quit(UserName)
                //- Go to menu page
                case "menu":
                case "MENU":
                    return menuPage(UserName)
                //- Move the character forward
                case "move":
                case "MOVE":
                    //check directions
                    if (_Direction == robotUP) DirectionY += 1
                    else if (_Direction == robotDOWN) DirectionY -= 1
                    else if (_Direction == robotRIGHT) DirectionX += 1
                    else if (_Direction == robotLEFT) DirectionX -= 1
                    //return this page with parameter input
                    return checkeredPage(
                        DirectionX <= 5 && DirectionX >= 0 ? DirectionX : _axisX,
                        DirectionY <= 5 && DirectionY >= 0 ? DirectionY : _axisY,
                        _Direction,
                        UserName
                    )
                //- Rotate clockwise
                case "right":
                case "RIGHT":
                    //check directions
                    if (_Direction == robotUP) _Direction = robotRIGHT
                    else if (_Direction == robotDOWN) _Direction = robotLEFT
                    else if (_Direction == robotRIGHT) _Direction = robotDOWN
                    else if (_Direction == robotLEFT) _Direction = robotUP
                    //return this page with parameter input
                    return checkeredPage(
                        DirectionX,
                        DirectionY,
                        _Direction,
                        UserName
                    )
                //- Rotate counterclockwise
                case "left":
                case "LEFT":
                    //check directions
                    if (_Direction == robotUP) _Direction = robotLEFT
                    else if (_Direction == robotDOWN) _Direction = robotRIGHT
                    else if (_Direction == robotRIGHT) _Direction = robotUP
                    else if (_Direction == robotLEFT) _Direction = robotDOWN
                    //return this page with parameter input
                    return checkeredPage(
                        DirectionX,
                        DirectionY,
                        _Direction,
                        UserName
                    )

                //-Go to position ٓaxis x - axis y - Direction
                default:
                    // error text
                    var errorText = "read README.md -> x-y-direction || for Example: 2-3-left"
                    //spilt input x:[0] - y:[1] - direction:[2]
                    let splitInput = input.split('-')
                    //Check input values
                    if (splitInput.length !== 3) return errorPage(errorText, 'commendRobot.js', 1)
                    try {
                        //check direction input
                        if (splitInput[2] === 'up') _Direction = robotUP
                        else if (splitInput[2] === 'down') _Direction = robotDOWN
                        else if (splitInput[2] === 'right') _Direction = robotRIGHT
                        else if (splitInput[2] === 'left') _Direction = robotLEFT
                        //return this page with parameter input
                        return checkeredPage(
                            Number(splitInput[0]) <= 5 && Number(splitInput[0]) >= 0 ? DirectionX = Number(splitInput[0]) : _axisX,
                            Number(splitInput[1]) <= 5 && Number(splitInput[1]) >= 0 ? DirectionY = Number(splitInput[1]) : _axisY,
                            _Direction,
                            UserName
                        )

                    } catch (error) {
                        return errorPage(errorText, 'commendRobot.js', 1)
                    }
            }


        })

    } catch (error) {
        return errorPage(error, 'commendRobot.js', 1)
    }

}

export { commendRobot }