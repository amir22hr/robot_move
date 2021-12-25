const checkeredPage = ({ x, y, f, mv }) => {
    // 19 hyphens
    var border = "-------------------------"
    // cells
    var cell = ""
    var activeCell = ""
    //space
    var space = " "

    //Coordinate axis
    console.log(`* Coordinate axis: x:${x}   y:${y}   F:${f}\n`)

    //arrow axis
    if (f == 'u') f = '⬆️'
    else if (f == 'd') f = '⬇️'
    else if (f == 'r') f = '➡️'
    else if (f == 'l') f = '⬅️'

    // cells maker
    for (let i = 0; i <= 6; i++) {
        cell += `| ${space} `
    }
    // activeCell maker
    for (let i = 0; i <= 6; i++) {
        if (i == x) {
            activeCell += `| ${f} `
            continue
        }
        activeCell += `| ${space} `
    }

    // axis number
    var axis = 6
    // final render
    for (let i = 6; i > 0; i--) {
        axis -= 1

        // For the y axis 
        if (i == (y + 1)) {
            console.log(space, border)
            console.log(axis, activeCell)
            continue
        }

        // for write enough hyphen
        if (i < 1) {
            console.log(space, border)
            break
        }

        // write cell and border
        console.log(space, border)
        console.log(axis, cell)

    }
    console.log(space, border)
    console.log('   ', 0, ' ', 1, ' ', 2, ' ', 3, ' ', 4, ' ', 5)

}

module.exports = checkeredPage