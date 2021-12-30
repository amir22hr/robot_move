import terminal from 'terminal-kit'
const term = terminal.terminal

const errorPage = async (err, page, code) => {
    
    //clear terminal
    console.clear()

    // error table
    await term.table([
        [`An Error Occurred - [${page}]`],
        [err]
    ], {
        hasBorder: true,
        contentHasMarkup: true,
        borderChars: 'lightRounded',
        borderAttr: { color: 'red' },
        firstCellTextAttr: { bgColor: 'red' },
        width: term.width,
        fit: true,
    })

    // exit app
    await term.processExit(code)

}

export { errorPage }