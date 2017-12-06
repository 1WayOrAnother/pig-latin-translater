function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

$(function() {
  var form = document.getElementById('pigLatinForm');
  var displayTranslation = $('#pigLatinTranslation h4');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputSentence = capitalize($('#pigLatinInput').val());
    console.log('inputSentence: ' + inputSentence);
    var splitSentence = inputSentence.split('');
    console.log('splitSentence: ' + splitSentence);
    var testSentence = [];
    // $('#pigLatinTranslation').toggle();


    if (inputSentence.length == 1) { // Single letter word that is a vowel e.g., A or I
      var singleLetterVowelWord = splitSentence.map(function(letter) {
        return letter.replace(/[ai]/gi, letter + 'ay');
      });
      displayTranslation.text(singleLetterVowelWord.join(''));
    } else if (inputSentence.charAt(0) == inputSentence.match(/[aeiou]/i)) { // Word beginning w/ a vowel and contains more than just a single letter.
      // console.log('Found a match: ' + inputSentence.match(/[aeiou]/i));
      inputSentence = inputSentence + 'way';
      displayTranslation.text(capitalize(inputSentence));
    } else {
      console.log("No match Found");
    }
  });
});
