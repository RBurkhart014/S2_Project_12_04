"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Ryan Burkhart
   Date: 3/4/19  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

var reportHTML = "<h1>" + raceTitle + "</h1>";

var totalVotes = 0;

for (var i = 0; i < race.length; i++) {
    votes[i].forEach(calcSum);
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>" + Candidate[i] + "</th><th>" + Votes[i] + "</th></tr>";
    reportHTML += "</table>";
}

document.getElementsByTagName("section").innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for(var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum[j]];
        var candidateParty = party[raceNum[j]];
        var candidateVotes = votes[raceNum[j]];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes + "(" + candidatePercent + ")</td></tr>";
        votes.toLocaleString();
        candidatePercent.toFixed();
    }
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

function calcPercent(value, sum) {
   return (100*value/sum);
}

    var rowHTML = "";
    for(var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum[j]];
        var candidateParty = party[raceNum[j]];
        var candidateVotes = votes[raceNum[j]];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes + "(" + candidatePercent + ")</td></tr>";
        votes.toLocaleString();
        candidatePercent.toFixed();
    }

function calcSum(value) {
   totalVotes += value;
}

function calcPercent(value, sum) {
   return (100*value/sum);
}



// Clawson, I had an extremely difficult time with this project. I really did not understand this material & the peers iasked for around me & worked with said the same thing, I hate to say that im giving up, but that feeling where you want to break your computer is happening and i do NOT understand this. So im turning in what i have above.