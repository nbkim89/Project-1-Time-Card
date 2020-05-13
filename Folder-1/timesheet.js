
//Time to show on top of punch in button 
var time = $(".currentTime");
var clockInDisplay = $(".clockedIn")
var clockOutDisplay =$(".clockedOut")
var green = $(".btn-floating-green")
var red = $(".btn-floating-red")

var now = moment();


// Function current time and date to display 
function currentTime() {
    let interval = setInterval(function () {

        time.text(moment().format("dddd MMM Do YYYY, h:mm:ss a"))
    }, 1000)

};
currentTime()

////function & event listeners for punching IN/OUT 


$(".btn-floating-green").on('click', function () {
    var clockInTime = moment().format("dddd MMMM Do , h:mm A");
    
    clockInDisplay.text("Clock IN:"+ clockInTime);

    console.log(localStorage);

    //var clockInTime = moment().format("dddd MMMM Do , h:mm A");

    localStorage.setItem('green', clockInTime );

});



$(".btn-floating-red").on('click', function() {
    var clockOutTime = moment().format("dddd MMMM Do , h:mm A");
    
    
    clockOutDisplay.text("Clock OUT" + clockOutTime);
    
    localStorage.setItem('red', clockOutTime);


});










