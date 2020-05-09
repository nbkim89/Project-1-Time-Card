//Time to show on top of punch in button 
var time = $(".currentTime");
//var PunchIn = ""
//var PunchOUt = ""
var now = moment();

// Function current time and date to display 
function currentTime(){
   let interval= setInterval(function(){
        
        time.text(moment().format("dddd MMM Do YYYY, h:mm:ss a"))
    },1000)   

}
 currentTime()

//function & event listener for punching IN/OUT 

$(".btn-floating").on('click', function(){
    var punchIn = 

    

})




