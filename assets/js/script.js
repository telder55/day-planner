// Variables for each hour slot
var nineAM = document.getElementById("09");
var tenAM = document.getElementById("10");
var elevenAM = document.getElementById("11");
var twelvePM = document.getElementById("12");
var onePM = document.getElementById("13");
var twoPM = document.getElementById("14");
var threePM = document.getElementById("15");
var fourPM = document.getElementById("16");
var fivePM = document.getElementById("17");

// Variables for save buttons
var saveNine = document.getElementById("9-save");

var dateArea = document.getElementById("currentDay");

// Current Date + Time
var m = moment();

// Logging Current Time
console.log(`toString() ==> ${m.toString()}`);


// Array for time block hours
var hourBlockArray = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

// Array for storage objects
var textStoreArray = [];
console.log(textStoreArray);

// Get text from local storage 

if (localStorage.getItem("Planner Entry")) {
    textStoreArray = JSON.parse(localStorage.getItem("Planner Entry"))
};

console.log(textStoreArray);

// Add 9am text to text area
var nineText = document.getElementById("9-text");
nineText.textContent = textStoreArray[0].Nine;

// Function to get 9am text 
function getNineText(event) {
    event.preventDefault();
    var nineTextValue = document.getElementById("9-text").value;
    console.log(nineTextValue)
    store9Text(nineTextValue);

}

// Store 9am text to local storage
function store9Text(text) {
    var nineStore = {
        Nine: text
    };
    
    textStoreArray.push(nineStore);
    // Stringify Text Store Array
    localStorage.setItem("Planner Entry", JSON.stringify(textStoreArray));
}


saveNine.addEventListener("click", getNineText);

// Function to set colors based on current hour
function timeCheck() {
    // Calling Add Date Function
    function addDate() {
        dateArea.textContent = m;
    };

    addDate();
    // Getting Hour as a single number
    var currentHour = moment().toString().split(" ")[4].split(":")[0];

    for (var i = 0; i < hourBlockArray.length; i++) {
        // Getting hour in number for each hour block in the array
        var currentHourBlock = hourBlockArray[i].getAttribute("id");
        // console.log(currentHourBlock);
        // console.log(currentHour);
       
        // If current hour block is less then current hour apply class "past"
        if (currentHourBlock < currentHour) {
            hourBlockArray[i].classList.add("past");
        }
        // If current hour block is greater then current hour apply class "future"
        else if (currentHourBlock > currentHour) {
            hourBlockArray[i].classList.add("future");
        // If current hour block is greater then current hour apply class "future"
        } else {
            hourBlockArray[i].classList.add("present");
        }

        
    }

    
    

};

setInterval(timeCheck, 1000);