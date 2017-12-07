'use strict';
// GLOBAL VARS
// var stringInput = $('#pigLatinInput').val();
var vowels = RegExp(/[aeiou]/i);
var consonants = RegExp(/[^aeiou]/i);
var quCons = RegExp(/qu\w*?/gi);
// RegExp that looks for a 'q' followed immediately by a 'u'
// string.match(/qu\w*?/gi)

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function wordsStartingWithVowel(string) {
  if (string.length == 1) {
    var singleLetterWord = splitSentence.map(function(letter) {
      return letter.replace(/[ai]/gi, letter + 'ay');
    });
    $('#pigLatinTranslation h4').text(singleLetterWord.join(''));
  } else if (string.charAt(0) == string.match(vowels)) {
    string = string + 'way';
    $('#pigLatinTranslation h4').text(string);
  } else { console.log('No Match Found'); }
}

function wordsStartingWithCon(string) {
  var splitString = string.split(' ');
  if(string.length > 1 && string.charAt(0) == string.match(consonants)) {
    if (string.match(quCons)) {
      var qIndex = string.indexOf('qu');
      if(qIndex !== -1) {
        console.log('Cons q & u do not start at the beginning of the word');
      } else { console.log('test'); }
      console.log(qIndex);
      // var beforeQ = string.
      // var uIndex = string.indexOf('u');
      // var afterU = string.slice(uIndex + 1);
      // console.log(string.slice(uIndex + 1));
      // string = string.slice(uIndex + 1) + string.slice(qIndex -1) + 'ay';
      // string = string.slice(uIndex + 1) + string.slice(qIndex - 1, uIndex + 1) + 'ay';
      // console.log(string);
      // string = string.slice(qIndex) + 'ay';
    }
    // } else {
    //   string = string.slice(1) + string.charAt(0) + 'way';
    // }
    // console.log(string);
  } else console.log('This word does not start with a consonant');
}

function userInput() {
  var form = document.getElementById('pigLatinForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputSentence = capitalize($('#pigLatinInput').val());
    var splitSentence = inputSentence.split('');

    // $('#pigLatinTranslation').toggle();
    // wordsStartingWithVowel(inputSentence);
    wordsStartingWithCon(inputSentence);
  });
}

// Document Ready
$(function() {
  userInput();
});
// $(function() {
//   var form = document.getElementById('pigLatinForm'); // $('#pigLatinForm')
//   var displayTranslation = $('#pigLatinTranslation h4');
// // created variabe for
//   form.addEventListener('submit', function(event) { // Also can be written as $('#pigLatinForm').submit(function(event) { })
//     event.preventDefault(); // Prevents form from trying submit user input to a server
//     var inputSentence = capitalize($('#pigLatinInput').val());  // storing the value of the user's input into the variable inputSentence
//
//     console.log('inputSentence: ' + inputSentence); // Testing purposes
//     var splitSentence = inputSentence.split(''); // Spliting inputSentence and storing it into the variable splitSentence
//     console.log('splitSentence: ' + splitSentence); // Testing purposes
//
//     // $('#pigLatinTranslation').toggle();
//
//     if (inputSentence.length == 1) { // If the length of inputSentence is equal to 1 e.g., I, A
//       var singleLetterVowelWord = splitSentence.map(function(letter) { // Mapping splitSentence by 'letter' and storing the value into the variable singleLetterVowelWord
//         return letter.replace(/[ai]/gi, letter + 'ay'); // Returns 'letter' and if the 'letter' is either a or i it will append 'ay'.
//         // single sentence map it with the function
//       });
//       displayTranslation.text(singleLetterVowelWord.join('')); // Print the result onto the page
//     } else if (inputSentence.charAt(0) == inputSentence.match(/[aeiou]/i)) { // If the first letter in inputSentence is either a, e, i, o, or u
//       // console.log('Found a match: ' + inputSentence.match(/[aeiou]/i));
//       inputSentence = inputSentence + 'way';
//       displayTranslation.text(inputSentence); // Print result onto the page
//     } else {
//       console.log("No match Found");
//     }
//   });
// });
