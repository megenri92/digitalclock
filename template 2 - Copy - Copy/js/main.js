// function to add a zero in front of the number if the number is less than 10
function checkTime(i) {
    // check if number is less than 10
    if (i < 10) {
        // adds zero in front of number
        i = "0" + i
    }

    // send back new value
    return i
}

// runs on page load 
function startTime() {
    // store the time in a variable
    var currentTime = new Date()

    // store the current hours, minutes and seconds in variables
    var hour = currentTime.getHours()
    var minute = currentTime.getMinutes()
    var second = currentTime.getSeconds()
    var amPM = (hour > 11) ? "PM" : "am";    
    
    //change military time to standard time if hours are greater than 12
    if (hour > 12) {
        // remove 12 from hour
        hour = hour - 12;
    }

    // update variables minute and second using checkTime function from line 1
    minute = checkTime(minute)
    second = checkTime(second)

    //select element with id="time" and change the text to the current time
    document.getElementById('time').textContent = hour + ":" + minute + ":" + second + amPM


    //recalls the function every second, time becomes dynamic
    setTimeout(function () {
        startTime()
    }, 1000)
}

// add event listener to start function so finally time will be displayed
document.getElementById('time').addEventListener('onload', startTime(), false)