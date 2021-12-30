import terminal from 'terminal-kit'
const term = terminal.terminal

import { errorPage } from '../error/errorPage.js'

const reportRobot = (_axisX, _axisY, _Direction) => {

    try {

        // realTime report
        // Im use term.table() like a console.table()
        term.table([
            ["X axis", "Y axis", "Direction"],
            [_axisX, _axisY, _Direction],
        ], {
            hasBorder: true,
            contentHasMarkup: true,
            textAttr: { bgColor: 'black', color: 'red' },
            width: term.width,
            fit: true,
        })

    } catch (error) {
        return errorPage(error, 'reportRobot.js', 1)
    }

}

export { reportRobot }