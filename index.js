//define
var readlineSync = require('readline-sync');
const fs = require('fs')
const checkeredPage = require('./checkeredPage')

//read help.txt
var help = fs.readFileSync('./help.txt', 'utf-8')

//Global Variable
global.ax = 0;
global.ay = 0;
global.af = 'u';

//Variable
var move;

//Run Robot
while (true) {
    //readLine 
    var read = readlineSync.question('\ncmd (h:help, q:Quit): ')

    // config
    if (read) {
        console.clear()

        //quit
        if (read == 'q') process.exit(0)
        //help
        else if (read == 'h') console.log(help, '\n')
        //move
        else if (read == 'mv') {
            //move function
            if ((ax <= 4 && ax >= 0) && (ay <= 4 && ay >= 0)) {
                if (af == 'u') ay += 1
                else if (af == 'd') ay -= 1
                else if (af == 'r') ax += 1
                else if (af == 'l') ax -= 1
            } else {
                console.log("! -Out Of Range- !\n")
            }
        }
        //Report
        else if (read == 'R') {
            console.log("************************")
            console.log("Robot Report: ", "x:", ax, "y:", ay, "F:", af)
            console.log("************************\n")
        }
        // clockwise rotation
        else if (read == 'r') {
            if (af == 'u') af = 'r'
            else if (af == 'r') af = 'd'
            else if (af == 'd') af = 'l'
            else if (af == 'l') af = 'u'
        }
        // anti clockwise rotation
        else if (read == 'l') {
            if (af == 'u') af = 'l'
            else if (af == 'l') af = 'd'
            else if (af == 'd') af = 'r'
            else if (af == 'r') af = 'u'
        }
        // x,y,f
        else {
            let axis = read.split('-')
            x0 = Number(axis[0]), y0 = Number(axis[1]), f0 = String(axis[2])

            if ((x0 <= 5 && x0 >= 0) && (y0 <= 5 && y0 >= 0) && (f0 == 'u' || f0 == 'r' || f0 == 'd' || f0 == 'l')) {
                ax = x0, ay = y0, af = f0
            }
            else {
                ax = 0, ay = 0, af = 'u'
                console.log("----------------")
                console.log("input not Valid\n5>= x >=0\n5>= y >=0\nf= u,r,d,l\nfor example: 2-3-d")
                console.log("----------------")
            }
        }
    }

    //Checkered page
    checkeredPage({
        x: ax,
        y: ay,
        f: af,
    })


}