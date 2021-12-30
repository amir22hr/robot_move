import terminal from 'terminal-kit'
const term = terminal.terminal

import { errorPage } from '../error/errorPage.js'

const CheckeredBuilder = (_axisX, _axisY, _Direction) => {

    try {

        // variables
        var arrayTable = []
        var temp = ['', '', '', '', '', '', '']

        //loop for find the desired point
        for (var axisY = 5; axisY >= 0; axisY--) {
            if (axisY == _axisY) {
                // this is number of table
                temp[0] = axisY.toString()
                // put character in cell
                temp[_axisX + 1] = _Direction
                //push to array variable
                arrayTable.push(temp)
                continue
            }
            // push row with axisY number
            arrayTable.push(
                [axisY.toString(), '', '', '', '', '', ''],
            )
        }
        // push end axis row
        arrayTable.push(
            ['y/x', '0', '1', '2', '3', '4', '5'],
        )

        //show Checkered
        // Im use term.table() like a console.table()
        term.table(arrayTable, {
            hasBorder: true,
            contentHasMarkup: true,
            width: term.width,
            fit: true,
        }
        )

    } catch (error) {
        return errorPage(error, 'CheckeredBuilder.js', 1)
    }

}

export { CheckeredBuilder }