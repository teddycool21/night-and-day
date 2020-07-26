basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() == 100) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
