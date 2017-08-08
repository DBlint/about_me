'strict';

var q1 = 'Am I married?';
var q2 = 'Do I have kids?';
var q3 = 'Did I play sports in school?';
var q4 = 'Are my kids out of the house?';
var q5 = 'Have I ever been out of the country?';

var a1 = prompt(q1).toUpperCase();
var a2 = prompt(q2).toUpperCase();
var a3 = prompt(q3).toUpperCase();
var a4 = prompt(q4).toUpperCase();
var q5 = prompt(q5).toUpperCase();

var text1, text2, text3, text4, text5;

if (a1 === 'YES' || a1 === 'Y')
  {
  text1 = document.getElementById('answer1');
  text1.textContent = 'You are right! I have been married to my wife for 21 years.';
}
else if (a1 === 'NO' || a1 === 'N'){
  text1 = document.getElementById('answer1');
  text1.textContent = 'NOPE! I have actually been married to my wife for 21 years.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text1 = document.getElementById('answer1');
  text1.textContent = 'You have not entered your answer in the proper format.';
}

if (a2 === 'YES' || a2 === 'Y')
  {
  text2 = document.getElementById('answer2');
  text2.textContent = 'You are correct!  I have a son and a daughter.';
}
else if (a2 === 'NO' || a2 === 'N'){
  text2 = document.getElementById('answer2');
  text2.textContent = 'NOPE! I have have 2 children.  A son and a daughter.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text2 = document.getElementById('answer2');
  text2.textContent = 'You have not entered your answer in the proper format.';
}

if (a3 === 'YES' || a3 === 'Y')
  {
  text3 = document.getElementById('answer3');
  text3.textContent = 'Sorry to disappoint.  I did not participate in school sports.';
}
else if (a3 === 'NO' || a3 === 'N'){
  text3 = document.getElementById('answer3');
  text3.textContent = 'Affirmative!  I did not participate in school sports.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text3 = document.getElementById('answer3');
  text3.textContent = 'You have not entered your answer in the proper format.';
}

if (a4 === 'YES' || a4 === 'Y')
  {
  text4 = document.getElementById('answer4');
  text4.textContent = 'Hell yeah!  My daughter is 19 and currently attending WSU!.';
}
else if (a4 === 'NO' || a4 === 'N'){
  text4 = document.getElementById('answer4');
  text4.textContent = 'Actually, my 19 year old daughter is at WSU now!.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text4 = document.getElementById('answer4');
  text4.textContent = 'You have not entered your answer in the proper format.';
}

if (a5 === 'YES' || a5 === 'Y')
  {
  text5 = document.getElementById('answer5');
  text5.textContent = 'You are right! I have been married to my wife for 21 years.';
}
else if (a1 === 'NO' || a1 === 'N'){
  text5 = document.getElementById('answer5');
  text5.textContent = 'NOPE! I have actually been married to my wife for 21 years.';
}
else {
  alert('Please enter Y/N or Yes/No for an answer.');
  text5 = document.getElementById('answer5');
  text5.textContent = 'You have not entered your answer in the proper format.';
}
