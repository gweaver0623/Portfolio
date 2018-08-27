var createPolitician = function(name, partyColor)
{
  
  
  var politician = {};
  politician.name = name;

  politician.electionResults = null;

  politician.totalVotes = 0;
  
  politician.partyColor = partyColor;
  
  politician.tallyUpVotes = function()
  {
    this.totalVotes = 0;
    for (var i = 0; i< this.electionResults.length; i++){
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return politician;
  

};


var mcqueen = createPolitician("Lightning McQueen", [132, 17, 11]);

var storm = createPolitician("Jackson Storm", [11, 32, 57]);

console.log("Lightning's color is: " + mcqueen.partyColor);
console.log("Jackson's color is: " + storm.partyColor);

//initial voting results
   storm.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

  mcqueen.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
  

//the states made a mistake, and I had to correct some votes
storm.electionResults[9] = 1;
mcqueen.electionResults[9] = 28;

storm.electionResults[4] = 17;
mcqueen.electionResults[4] = 38;

  
storm.electionResults[43] = 11;
mcqueen.electionResults[43] = 27;

console.log(mcqueen.electionResults);
console.log(storm.electionResults);
  
  storm.tallyUpVotes();
  mcqueen.tallyUpVotes();
  
  console.log("Lightning McQueen = " + mcqueen.totalVotes);
  console.log("Jackson Storm = " + storm.totalVotes);

var winner = "???";


var setStateResults = function(state)
{
  theStates[state].winner = null;
  
  if (mcqueen.electionResults[state] > storm.electionResults[state]) {
    
    theStates[state].winner = mcqueen;
    
  } else if (storm.electionResults[state] > mcqueen.electionResults[state]) {
    theStates[state].winner = storm;}

  var stateWinner = theStates[state].winner;

if (stateWinner !== null){
  theStates[state].rgbColor = stateWinner.partyColor;
} else {
  theStates[state].rgbColor = [219,207,127];
}
    var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0].children[0];

var stateName = header.children[0];

stateName.innerText = theStates[state].nameFull;
  
var stateAbbrev = header.children[1];
  
stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")"; 

var candidate1Name = stateInfoTable.children[1].children[0].children[0];
  
candidate1Name.innerText = mcqueen.name;
  
var candidate2Name = stateInfoTable.children[1].children[1].children[0];
  
  candidate2Name.innerText = storm.name;
  
var candidate1Results = stateInfoTable.children[1].children[0].children[1];
  
  candidate1Results.innerText = mcqueen.electionResults[state];
  
var candidate2Results = stateInfoTable.children[1].children[1].children[1];
  
  candidate2Results.innerText = storm.electionResults[state];
  
var winnersName = stateInfoTable.children[1].children[2].children[1];
 
if (theStates[state].winner ===null){
  winnersName.innerText = "DRAW";
}else {
  winnersName.innerText = theStates[state].winner.name;
}
  
}

if (storm.totalVotes > mcqueen.totalVotes){
  winner = storm.name;
}else if (mcqueen.totalVotes > storm.totalVotes){
  winner = mcqueen.name;
}else {
  winner = "DRAW."
}

console.log("AND THE WINNER OF THIS YEARS ELECTION IS..." + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = mcqueen.name;
row.children[1].innerText = mcqueen.totalVotes;
row.children[2].innerText = storm.name;
row.children[3].innerText = storm.totalVotes
row.children[5].innerText = winner;







