function capitalize(string) { // Create the function capitalize and take an argument 'string'
  var firstLetter = string.charAt(0); // Store the first letter from 'string' into the variable firstLetter
  firstLetter = firstLetter.toUpperCase(); // Uppercase firstLetter
  restOfTheString = string.slice(1); // Store the rest of the string into the var restOfTheString
  return firstLetter + restOfTheString;

  // return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

$(function() {
  var form = document.getElementById('pigLatinForm'); // $('#pigLatinForm')
  var displayTranslation = $('#pigLatinTranslation h4');
// created variabe for
  form.addEventListener('submit', function(event) { // Also can be written as $('#pigLatinForm').submit(function(event) { })
    event.preventDefault(); // Prevents form from trying submit user input to a server
    var inputSentence = capitalize($('#pigLatinInput').val());  // storing the value of the user's input into the variable inputSentence

    console.log('inputSentence: ' + inputSentence); // Testing purposes
    var splitSentence = inputSentence.split(''); // Spliting inputSentence and storing it into the variable splitSentence
    console.log('splitSentence: ' + splitSentence); // Testing purposes

    // $('#pigLatinTranslation').toggle();

    if (inputSentence.length == 1) { // If the length of inputSentence is equal to 1 e.g., I, A
      var singleLetterVowelWord = splitSentence.map(function(letter) { // Mapping splitSentence by 'letter' and storing the value into the variable singleLetterVowelWord
        return letter.replace(/[ai]/gi, letter + 'ay'); // Returns 'letter' and if the 'letter' is either a or i it will append 'ay'.
        // single sentence map it with the function
      });
      displayTranslation.text(singleLetterVowelWord.join('')); // Print the result onto the page
    } else if (inputSentence.charAt(0) == inputSentence.match(/[aeiou]/i)) { // If the first letter in inputSentence is either a, e, i, o, or u
      // console.log('Found a match: ' + inputSentence.match(/[aeiou]/i));
      inputSentence = inputSentence + 'way';
      displayTranslation.text(inputSentence); // Print result onto the page
    } else {
      console.log("No match Found");
    }
  });
});
