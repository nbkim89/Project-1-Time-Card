
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
    
    clockInDisplay.html("Clock IN : "+moment().format("dddd MMMM Do , h:mm A"));
    
    


});



$(".btn-floating-red").on('click', function() {
    clockOutDisplay.html("Clock OUT : "+moment().format("dddd MMMM Do , h:mm A"));


});

//Added function for calander pop up.
$(document).ready(function(){
    $('.datepicker').datepicker({
        yearRange: 1
    });
}); 

window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

        document.getElementById('recovery').innerHTML = deaths.toLocaleString('en');
        document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
        document.getElementById('population').innerHTML = population.toLocaleString('en');
        document.getElementById('update').innerHTML = update.substr(0, 10);
		


	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}

var queryURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=69a98bee020a4adba03f0f2f3cfe093b"

$.ajax({
	url: queryURL,
	method: "GET"
  }).then(function(response) {

	console.log(response);

	$(".ticker-item").text(response.articles[0].content);
});





