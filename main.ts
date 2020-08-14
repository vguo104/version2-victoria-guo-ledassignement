let lightLevelReadingOFF = false
let alarmON = false
let LightLevelReading = 0
// Confirms when button A is pressed, it will set variable lightLevelReadingOFF to false
input.onButtonPressed(Button.A, function () {
	
})
// When button B is pressed, if the variable alarmON is false, then variable lightLevelReadingOFF will be set to false.
input.onButtonPressed(Button.B, function () {
	
})
// This function begins with a loop.
function Alarm () {
    // While the lightLevelReadingOff variable is true (meaning LightLevel value is 0), it will set the volume to a value of 125, set the alarmON variable to true, play the tone High B for 2 beats then pause for 2 seconds and play the same tone for the same amount of beats agin.
    while (lightLevelReadingOFF == true) {
        music.setVolume(125)
        alarmON = true
        music.playTone(988, music.beat(BeatFraction.Double))
        basic.pause(2000)
        music.playTone(988, music.beat(BeatFraction.Double))
        // While loop. is running, if button A is pressed, then the volume will be set to 0, and it will break out of the current loop and go to the following statements.
        if (input.buttonIsPressed(Button.A)) {
            music.setVolume(0)
            break;
        }
    }
    // Sets variable alarmON to false
    alarmON = false
}
// Set variable "LightLevelReading" to the light level applied to LED screen. Else, if button B is pressed and variable alarmON is false, then set the lightLevelReadingOff variable to false
// Set variable "lightLevelReadingOFF" to the value of variable LightLevelReading equalling 0.
// If the variable LightLevelReading is ever over value 128, then it will set the lightLevelReadingOFF to true and to call Alarm function.
// 
basic.forever(function () {
    LightLevelReading = input.lightLevel()
    lightLevelReadingOFF = LightLevelReading == 0
    if (LightLevelReading > 128) {
        lightLevelReadingOFF = true
        Alarm()
    } else if (input.buttonIsPressed(Button.B) && alarmON == false) {
        lightLevelReadingOFF = false
    }
})
