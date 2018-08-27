
//jquery at work

$(document).ready(function(){
	
	var magic8Ball = {};
	//creating array and list of answers in array
	magic8Ball.listOfAnswers = ["Yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "It is certain", "It is decidedly so", "Most likely", "My reply is no", "My sources say no", "Outlook good", "Outlook not so good", "Reply hazy try again", "Signs point to yes", "Very doubtful", "Without a doubt", "Yeah baby!", "Definitely", "You may rely on it"];
	
	
	$("#answer").hide();

	// define the method
	magic8Ball.askQuestion = function(question)		
 {
		
	//create a random number
		var randomNumber = Math.random();	
	//make the number between 0 and number of item in array
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	
	//round down the number to whole number
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	
	//use that number to index a random number from the answers array
	var answer = this.listOfAnswers[randomIndex];
	
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
		

	
};

var onClick = function() {
	
	$("#answer").hide();
	
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	
	setTimeout(
		function() {
			
	var question = prompt("ASK A YES/NO QUESTION!");
	
	magic8Ball.askQuestion(question);
			$("#8ball").effect( "shake" );
			$("#answer").fadeIn(4000);
			
		}, 500);
	
	
};
	
$("#questionButton").click( onClick );
});