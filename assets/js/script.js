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

// ----- function that takes and validates the user's response -----
var gatherReqs = function () {
	// declare object to hold all response parameters
	var responses = {};

	// --- password length ---
	var length = parseInt(
		prompt("Please enter the desired password length, from 8 to 128 characters")
	);

	console.log(length);
	console.log(typeof length);

	// check if a valid number was entered (if statement is to check for NaN)
	if (length !== length) {
		alert("Please enter a valid number between 8 and 128");
		// if a non-number was entered, repeat the function call
		return gatherReqs();
	} else if (7 < length && length < 128) {
		responses.length = length;
	} else {
		alert("Please enter a valid number between 8 and 128");
		// if a number outside of the desired range was entered, repeat the function call
		return gatherReqs();
	}

	// --- character requirements ---
	responses.special = confirm(
		'Would you like to include special characters (e.g. $, %, &)? Press "Cancel" if NO. Press "Submit" is YES.'
	);
	responses.lower = confirm(
		'Would you like to include lowercase letters? Press "Cancel" if NO. Press "Submit" if YES.'
	);
	responses.higher = confirm(
		'Would you like to include uppercase letters? Press "Cancel" if NO. Press "Submit" if YES.'
	);

	return responses;

	// return the object of response parameters
};

// ----- function that generates a new password -----
var generatePassword = function () {
	// get the user responses from the gatherReqs function
	var responses = gatherReqs();

	return responses;
};

var test = generatePassword();

// ----- push the generated password to the screen -----
// get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// write password to the #password input
// function writePassword() {
// 	var password = generatePassword();
// 	var passwordText = document.querySelector("#password");

// 	passwordText.value = password;
// }

// add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
