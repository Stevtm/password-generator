// ----- declare arrays for all possible characters -----
// special characters
var specialChars = "!#$%&'()*+,-./;<=>?@[\\]^_`{|}~".split("");
specialChars.push('"');

// lowercase letters
var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("");

// uppercase letters
var upperLetters = [];

for (var i = 0; i < lowerLetters.length; i++) {
	upperLetters[i] = lowerLetters[i].toUpperCase();
}

// numbers
var nums = "1234567890".split("");

// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
