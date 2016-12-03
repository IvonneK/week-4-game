	//Oops.....BROKEN I took pasted the jQuery in game file but my images didn't display. 
	//I should have displayed differently as it cause other problems. 
	
	var a;
	var min;
	var max;
	var playerTotalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystalButtons = 4;

	$("#aCrystal1").append(red);
	$("#aCrystal1").append(blue);
	$("#aCrystal1").append(yellow);
	$("#aCrystal1").append(green);

	 
 
	$(document).ready(function(){
		$(".instructions").wrap( "<div class='instructionsContainer'></div>" );
		$(".instructions").html("<p>You will be given a random number at the start of the game.</p>");
		
		$(".instructions").append("<br><p>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.</p>");
 		
		$(".instructions").append("<br><p>You win the game by matching your total score to random number, you lose the game if you total score goes above the random number.</p>");

 		$(".instructions").append("<br><p>The value of each crystal is hidden from you until you click on it.</p>");

		$(".instructions").append("<br><p>Each time when the game starts, the game will change the values of each crystal.</p>");

		$("#totalWinsLosses").html("Wins: " + wins + " " + "Losses: " + losses);

});

	function randomNumBetween(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// Generate Random number between 19 and 120
	showRandom = randomNumBetween(19,120);
	$("#showRandomNum").text(showRandom);

	$("#aCrystal1").click(function(){
		crystalRandom = randomNumBetween(1,12);
		crystalHold = crystalRandom;
		playerTotalScore += crystalHold;
	    $("#playerTotalDiv").text(playerTotalScore);		    
	});

	var playerDiv = $("#scoreDiv");
	if (playerTotalScore == showRandom) {
		$("#totalWinsLosses").html("Wins: " + wins + " " + "Losses: " + losses);
		wins++;
		$("#playerTotalDiv").html(playerTotalScore);
		playerTotalScore += playerTotalScore;

	}else{
		if (playerTotalScore > showRandom) {
			$("#totalWinsLosses").html("Wins: " + wins + " " + "Losses: " + losses);
			losses++;
		};
	};	
