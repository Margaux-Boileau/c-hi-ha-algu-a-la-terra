let X = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.clearScreen()
    X = randint(1, 6)
    radio.sendNumber(X)
    basic.showString("" + (X))
    if (receivedNumber < X) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(1, 6))
})
