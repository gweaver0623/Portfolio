var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function()
{
var timeEventJs = document.getElementById ("timeEvent");
// getting your image element
var lolcat = document.getElementById('lolcat');

// defining your default image
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
//party image and message
if (time == partyTime){
	image = "https://i.ytimg.com/vi/HDOMbFRU-uk/hqdefault.jpg";
    messageText = "TIME TO DANCE!!!";
} //naptime image and message
else if (time == napTime) {
	image = "http://www.catgifpage.com/gifs/306.gif"
    messageText = "ZZZZZZZZZZ";
} //lunch image and message
else if (time == lunchTime) {
	image = "https://s.aolcdn.com/hss/storage/midas/844da290a17d23339d1869ed3ea48a17/204162099/Screen+Shot+2016-08-04+at+9.58.28+AM.png"
    messageText = "NOM NOM NOM!!!!";
} //alarm picture and message
else if (time == wakeupTime) {
	image = "https://i.imgflip.com/1v69hn.jpg"
    messageText = "TURN THAT ALARM OFF!";
} //morning image and message
else if (time < noon) {
	image = "http://i0.kym-cdn.com/entries/icons/facebook/000/011/365/GRUMPYCAT.jpg"
    messageText = "DO I HAVE TO BE AWAKE YET?!";
} //evening image and message
else if (time > evening) {
	image = "http://www.tanktronic.com/wp-content/uploads/2014/09/51mpYKS.jpg"
    messageText = "I DON'T WANT TO GO TO SLEEP YET!";
} //good day image and message
else {
	image = "https://whyevolutionistrue.files.wordpress.com/2017/06/happy-cat.jpg"
    messageText = "GOOD DAY TO ALL!";
}

timeEventJs.innerText = messageText;
lolcat.src = image;



var showCurrentTime = function ()
{
	//display string on webpage
	var clock = document.getElementById('clock');
	
	var currentTime = new Date();
	
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM"
	
	//set hours
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}
	
	//set minutes
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	
	//set seconds
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}
	
	//put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime;
};
	
showCurrentTime();

};
updateClock();

var oneSecond = 1000;

setInterval ( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "PARTY TIME!";
		partyTimeButton.style.backgroundColor = "#222";
	} else {
		isPartyTime = false;
		time = new Date ().getHours();
		partyTimeButton.innerText = "PARTY OVER!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
};

partyTimeButton.addEventListener('click',partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function(){
	wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener ('change', wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function(){
	lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener ('change', lunchEvent);

var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function(){
	napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener ('change', napEvent);
