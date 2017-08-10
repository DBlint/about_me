'use strict';

var marriedQ = 'Am I married?';
var haveKidsQ = 'Do I have kids?';
var schoolSportsQ = 'Did I play sports in school?';
var kidsGoneQ = 'Are my kids out of the house?';
var outOfCountryQ = 'Have I ever been out of the country?';

var correctAnswers = 0;
var guestName = prompt('Please enter your name!');
var text1, text2, text3, text4, text5;
/* Personal Questions
//Question Number 1
var marriedAns = prompt(marriedQ);
console.log('Answer1 = ' + marriedAns);
if (marriedAns.toUpperCase() === 'YES' || marriedAns.toUpperCase() === 'Y')
  {
  correctAnswers++;
  alert('You are right ' + guestName + '! I have been married to my wife for 21 years.');
  text1 = document.getElementById('marriedAns');
  text1.textContent = 'You are right! I have been married to my wife for 21 years.';
}
else if (marriedAns.toUpperCase() === 'NO' || marriedAns.toUpperCase() === 'N'){
  alert('NO WAY ' + guestName.toUpperCase() + '! I have actually been married to my wife for 21 years.');
  text1 = document.getElementById('marriedAns');
  text1.textContent = 'NOPE! I have actually been married to my wife for 21 years.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text1 = document.getElementById('marriedAns');
  text1.textContent = 'You have not entered your answer in the proper format.';
}
//Question Number 2
var haveKidsAns = prompt(haveKidsQ);
console.log('Answer2 = ' + haveKidsAns);
if (haveKidsAns.toUpperCase() === 'YES' || haveKidsAns.toUpperCase() === 'Y')
  {
  correctAnswers++;
  alert('You are correct ' + guestName + '!  I have a son and a daughter.');
  text2 = document.getElementById('haveKidsAns');
  text2.textContent = 'You are correct ' + guestName + '! I have a son and a daughter.';
}
else if (haveKidsAns.toUpperCase() === 'NO' || haveKidsAns.toUpperCase() === 'N'){
  alert('NO WAY ' + guestName.toUpperCase() + '! I have have 2 children.  A son and a daughter.');
  text2 = document.getElementById('haveKidsAns');
  text2.textContent = 'NOPE! I have have 2 children.  A son and a daughter.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text2 = document.getElementById('haveKidsAns');
  text2.textContent = 'You have not entered your answer in the proper format.';
}
//Question Number 3
var schoolSportsAns = prompt(schoolSportsQ);
console.log('Answer3 = ' + schoolSportsAns);
if (schoolSportsAns.toUpperCase() === 'YES' || schoolSportsAns.toUpperCase() === 'Y')
  {
  alert('Sorry to disappoint you ' + guestName + '.  I did not participate in school sports.');
  text3 = document.getElementById('schoolSportsAns');
  text3.textContent = 'Sorry to disappoint.  I did not participate in school sports.';
}
else if (schoolSportsAns.toUpperCase() === 'NO' || schoolSportsAns.toUpperCase() === 'N'){
  correctAnswers++;
  alert('Affirmative ' + guestName + '! I did not participate in school sports.');
  text3 = document.getElementById('schoolSportsAns');
  text3.textContent = 'Affirmative!  I did not participate in school sports.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text3 = document.getElementById('schoolSportsAns');
  text3.textContent = 'You have not entered your answer in the proper format.';
}
//Question Number 4
var kidsGoneAns = prompt(kidsGoneQ);
console.log('Answer4 = ' + kidsGoneAns);
if (kidsGoneAns.toUpperCase() === 'YES' || kidsGoneAns.toUpperCase() === 'Y')
  {
  correctAnswers++;
  alert('Hell yeah ' + guestName + '! My daughter is 19 and currently attending WSU!');
  text4 = document.getElementById('kidsGoneAns');
  text4.textContent = 'Hell yeah!  My daughter is 19 and currently attending WSU!';
}
else if (kidsGoneAns.toUpperCase() === 'NO' || kidsGoneAns.toUpperCase() === 'N'){
  alert('Actually ' + guestName + ', my 19 year old daughter is at WSU now!');
  text4 = document.getElementById('kidsGoneAns');
  text4.textContent = 'Actually, my 19 year old daughter is at WSU now!';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text4 = document.getElementById('kidsGoneAns');
  text4.textContent = 'You have not entered your answer in the proper format.';
}
//Question Number 5
var outOfCountryAns = prompt(outOfCountryQ);
console.log('Answer5 = ' + haveKidsAns);
if (outOfCountryAns.toUpperCase() === 'YES' || outOfCountryAns.toUpperCase() === 'Y')
  {
  correctAnswers++;
  alert('Yes  ' + guestName + ', I have.  I have set foot in Mexico, Spain, Afghanistan, Iraq, Kyrgyzstan, Ireland, Kuwait, and Canada.');
  text5 = document.getElementById('outOfCountryAns');
  text5.textContent = 'Yes I have.  I have set foot in Mexico, Spain, Afghanistan, Iraq, Kyrgyzstan, Ireland, Kuwait, and Canada.';
}
else if (outOfCountryAns.toUpperCase() === 'NO' || outOfCountryAns.toUpperCase() === 'N'){
  alert('Actually ' + guestName + ', my time in the Army allowed me to visit several countries.');
  text5 = document.getElementById('outOfCountryAns');
  text5.textContent = 'Actually, my time in the Army allowed me to visit several countries.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text5 = document.getElementById('outOfCountryAns');
  text5.textContent = 'You have not entered your answer in the proper format.';
}
console.log(correctAnswers);
*/

//*/ Number Guessing  //Question Number 6
var targetNum = Math.floor(Math.random() * 10) + 1;
var guessCount = 0;
var guessInt;
while (guessCount < 4)
{
  var userGuess = prompt('Can you read my mind?  Please guess a number between 1 and 10.  You only have 4 chances to get this right!!');
  console.log('Target Number: ' + targetNum);
  console.log('User guess: ' + userGuess);
  guessCount++;
  console.log('Guess Count: ' + guessCount);
  guessInt = parseInt(userGuess);
  if (guessInt === targetNum)
  {
    alert('Congratulations!!! You must be psychic!!');
    correctAnswers++;
    break;
  }
  else {
    alert('You failed to guess my number.  Try again.');
    if (guessCount === 3) {
      alert('Be careful!  You only have one more chance!!!');
    }
    else if (guessCount === 4)
    {
      alert('You\'re not very good at this are you?? You have run out of guesses.');
    }
  }
}  //*/

//Question Number 7 Guess the State

var possAnswers = ['virginia', 'hawaii', 'texas', 'california', 'oregon', 'wisconsin'];
var stateGuessQty = 0;
var answeredCorrectly = false;
while (stateGuessQty < 6 && !answeredCorrectly)
{
  var stateGuess = prompt('Try to guess one of the other states I have lived in.');
  console.log('User State Input: ' + stateGuess);
  for (var i = 0; i < possAnswers.length; i++)
  {
    if (stateGuess.toLowerCase() === possAnswers[i])
    {
      answeredCorrectly = true;
      break;
    }
  }
  if (answeredCorrectly)
    {
    correctAnswers++;
    alert('Amazing work! The possible answers were: California, Hawaii, Oregon, Texas, Virginia, and Wisconsin');
  }
  else
   {
    alert('You failed to guess my state.');
    if (guessCount === 5)
     {
      alert('Be careful!  You only have one more chance!!!');
    }
    else if (guessCount === 6)
     {
      alert('You\'re not very good at this are you?? You have run out of guesses.');
    }
  }
}

//Score
