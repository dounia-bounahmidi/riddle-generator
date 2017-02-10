$(document).ready(function() {

	var generate = function() {

		var riddle = riddles[Math.floor(Math.random() * riddles.length)]; // riddle object attached in riddles.js file 

		return riddle.txt + "<br>" + "<p id='answer'>" + riddle.answer + "</p>" + "<p id='reveal'>Tell me</p>"; 
	}
	
	var $button = $(".inner-wrapper button"); 
	var $r = $(".riddle"); 
	
	$(".inner-wrapper button").click(function() {
		$r.html(generate());  
	}); 

	// Reveal hidden answer
	$("body").on("click", "#reveal", function() {
		$("#answer").toggleClass("on"); 
	}); 

}); 

