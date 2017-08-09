'use strict';

var question1 = 'Am I married?';
var question2 = 'Do I have kids?';
var question3 = 'Did I play sports in school?';
var question4 = 'Are my kids out of the house?';
var question5 = 'Have I ever been out of the country?';

var guestName = prompt('Please enter your name!');
var answer1 = prompt(question1).toUpperCase();
console.log('Answer1 = ' + answer1);
var answer2 = prompt(question2).toUpperCase();
console.log('Answer2 = ' + answer2);
var answer3 = prompt(question3).toUpperCase();
console.log('Answer3 = ' + answer3);
var answer4 = prompt(question4).toUpperCase();
console.log('Answer4 = ' + answer4);
var answer5 = prompt(question5).toUpperCase();
console.log('Answer5 = ' + answer5);

var text1, text2, text3, text4, text5;

if (answer1 === 'YES' || answer1 === 'Y')
  {
  alert('You are right! ' + guestName + ' I have been married to my wife for 21 years.');
  text1 = document.getElementById('answer1');
  text1.textContent = 'You are right! I have been married to my wife for 21 years.';
}
else if (answer1 === 'NO' || answer1 === 'N'){
  alert('NO WAY ' + guestName.toUpperCase() + '! I have actually been married to my wife for 21 years.');
  text1 = document.getElementById('answer1');
  text1.textContent = 'NOPE! I have actually been married to my wife for 21 years.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text1 = document.getElementById('answer1');
  text1.textContent = 'You have not entered your answer in the proper format.';
}

if (answer2 === 'YES' || answer2 === 'Y')
  {
  alert('You are correct ' + guestName + '!  I have a son and a daughter.');
  text2 = document.getElementById('answer2');
  text2.textContent = 'You are correct ' + guestName + '! I have a son and a daughter.';
}
else if (answer2 === 'NO' || answer2 === 'N'){
  alert('NO WAY ' + guestName.toUpperCase() + '! I have have 2 children.  A son and a daughter.');
  text2 = document.getElementById('answer2');
  text2.textContent = 'NOPE! I have have 2 children.  A son and a daughter.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text2 = document.getElementById('answer2');
  text2.textContent = 'You have not entered your answer in the proper format.';
}

if (answer3 === 'YES' || answer3 === 'Y')
  {
  alert('Sorry to disappoint you . ' + guestName + ' I did not participate in school sports.');
  text3 = document.getElementById('answer3');
  text3.textContent = 'Sorry to disappoint.  I did not participate in school sports.';
}
else if (answer3 === 'NO' || answer3 === 'N'){
  alert('Affirmative ' + guestName + '! I did not participate in school sports.');
  text3 = document.getElementById('answer3');
  text3.textContent = 'Affirmative!  I did not participate in school sports.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text3 = document.getElementById('answer3');
  text3.textContent = 'You have not entered your answer in the proper format.';
}

if (answer4 === 'YES' || answer4 === 'Y')
  {
  alert('Hell yeah ' + guestName + '! My daughter is 19 and currently attending WSU!');
  text4 = document.getElementById('answer4');
  text4.textContent = 'Hell yeah!  My daughter is 19 and currently attending WSU!';
}
else if (answer4 === 'NO' || answer4 === 'N'){
  alert('Actually ' + guestName + ', my 19 year old daughter is at WSU now!');
  text4 = document.getElementById('answer4');
  text4.textContent = 'Actually, my 19 year old daughter is at WSU now!';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text4 = document.getElementById('answer4');
  text4.textContent = 'You have not entered your answer in the proper format.';
}

if (answer5 === 'YES' || answer5 === 'Y')
  {
  alert('Yes  ' + guestName + ', I have.  I have set foot in Mexico, Spain, Afghanistan, Iraq, Kyrgyzstan, Ireland, Kuwait, and Canada.');
  text5 = document.getElementById('answer5');
  text5.textContent = 'Yes I have.  I have set foot in Mexico, Spain, Afghanistan, Iraq, Kyrgyzstan, Ireland, Kuwait, and Canada.';
}
else if (answer5 === 'NO' || answer5 === 'N'){
  alert('Actually ' + guestName + ', my time in the Army allowed me to visit several countries.');
  text5 = document.getElementById('answer5');
  text5.textContent = 'Actually, my time in the Army allowed me to visit several countries.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text5 = document.getElementById('answer5');
  text5.textContent = 'You have not entered your answer in the proper format.';
}
