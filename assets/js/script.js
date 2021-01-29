/*
Homework Notes

- Need to use local storage for saving in text. 
- Need to use Moment.JS to get the times. 
*/
var eightAM = document.getElementById("8");
var nineAM = document.getElementById("09");
var tenAM = document.getElementById("10");
var elevenAM = document.getElementById("11");
var twelvePM = document.getElementById("12");
var onePM = document.getElementById("13");
var twoPM = document.getElementById("14");
var threePM = document.getElementById("15");
var fourPM = document.getElementById("16");
var fivePM = document.getElementById("17");


// Array for time block hours
var hourBlockArray = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

function timeCheck() {
    // Getting Hour as a single number
    var currentHour = moment().toString().split(" ")[4].split(":")[0];

    for (var i = 0; i < hourBlockArray.length; i++) {
        // Getting hour in number for each hour block in the array
        var currentHourBlock = hourBlockArray[i].getAttribute("id");
        console.log(currentHourBlock);
        console.log(currentHour);
       
        // If current hour bock is less then current hour apply class "past"
        if (currentHourBlock < currentHour) {
            hourBlockArray[i].classList.add("past");
        }
        else if (currentHourBlock > currentHour) {
            hourBlockArray[i].classList.add("future");
            
        } else {
            hourBlockArray[i].classList.add("present");
        }

        // Compare times and add class of past if current hour is larger


       
    }

    
    

};

setInterval(timeCheck, 1000);





// Current Date + Time
let m = moment();


// Logging Current Time
console.log(`toString() ==> ${m.toString()}`);
