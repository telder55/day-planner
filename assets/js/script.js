/*
Homework Notes

- Need to use local storage for saving in text. 
- Need to use Moment.JS to get the times. 
*/

var nineAM = document.getElementById("9");

// Array for time block hours

var hourBlockArray = [nineAM];

function timeCheck() {
    console.log("Howdy");
    // Getting Hour as a single number
    var currentHour = moment().toString().split(" ")[4].split(":")[0];
    console.log(currentHour);

    for (var i = 0; i < hourBlockArray.length; i++) {
        // Getting hour in number for each block
        var currentHourBlock = hourBlockArray[i].getAttribute("id");

        // Console Logs to make sure these are numbers
        console.log(currentHourBlock);
        console.log(currentHour);
        
        // Compare times and add class 

        if (currentHourBlock > currentHour) {
            nineAM.classList.add("past");
            
        }
    }

    
    

};

setInterval(timeCheck, 1000);





// Current Date + Time
let m = moment();


// Logging Current Time
console.log(`toString() ==> ${m.toString()}`);
