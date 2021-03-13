// ----- declare arrays for all possible characters -----
// special characters
var specialChars = "!#$%&'()*+,-./;<=>?@[\\]^_`{|}~".split("");
specialChars.push('"');

// lowercase letters
var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");

// uppercase letters
var upperChars = [];

for (var i = 0; i < lowerChars.length; i++) {
	upperChars[i] = lowerChars[i].toUpperCase();
}

// numbers
var numberChars = "1234567890".split("");

// ----- function that takes and validates the user's response -----
var gatherReqs = function () {
	// declare object to hold all response parameters
	var responses = {};

	// --- password length (response stored as int or NaN) ---
	var length = parseInt(
		prompt("Please enter the desired password length, from 8 to 128 characters")
	);

	// check if a valid number was entered
	if (7 < length && length < 129) {
		responses.length = length;
	} else {
		// if a number outside of the desired range was entered, repeat the function call
		alert("Please enter a valid number between 8 and 128");
		return gatherReqs();
	}

	// get character responses foro gatherChars function and add them to the responses object
	var chars = gatherChars();
	responses.special = chars.special;
	responses.lower = chars.lower;
	responses.upper = chars.upper;
	responses.number = chars.number;

	return responses;

	// return the object of response parameters
};

// ---- function that takes character requirements and validates that there is at least one selected -----
var gatherChars = function () {
	var responses = {};

	// --- character requirements (reponse stored as true/false) ---
	responses.special = confirm(
		'Would you like to include special characters (e.g. $, %, &)? Press "Cancel" if NO. Press "Submit" is YES.'
	);
	responses.lower = confirm(
		'Would you like to include lowercase letters? Press "Cancel" if NO. Press "Submit" if YES.'
	);
	responses.upper = confirm(
		'Would you like to include uppercase letters? Press "Cancel" if NO. Press "Submit" if YES.'
	);
	responses.number = confirm(
		'Would you like to include numeric characters? Press "Cancel" if NO. Press "Submit" if YES.'
	);

	// check that at least one character type has been selected
	if (
		responses.special |
		responses.lower |
		responses.upper |
		responses.number
	) {
		return responses;
	} else {
		// if no character type has been selected, repeat the function call
		alert("Please select at least one character type!");
		return gatherChars();
	}
};

// ----- function that takes user responses and makes an array of all possible characters -----
var generatePossibleChars = function (responses) {
	// initialize the empty array
	var possibleChars = [];

	// add all applicable characters to the array
	if (responses.special) {
		possibleChars = possibleChars.concat(specialChars);
	}
	if (responses.lower) {
		possibleChars = possibleChars.concat(lowerChars);
	}
	if (responses.upper) {
		possibleChars = possibleChars.concat(upperChars);
	}
	if (responses.number) {
		possibleChars = possibleChars.concat(numberChars);
	}

	return possibleChars;
};

// ----- function that generates a new password -----
var generatePassword = function () {
	// get the user responses from the gatherReqs function
	var responses = gatherReqs();

	// get the array of possible characters from the generatePossibleChars function
	var possibleChars = generatePossibleChars(responses);

	// initialize an empty array to hold password characters
	var passwordChars = [];

	// add a number of characters to the passwordChars array based on the user length for reponse
	for (var i = 0; i < responses.length; i++) {
		// take a random character from the possibleChars array
		rand = Math.floor(Math.random() * possibleChars.length);
		char = possibleChars[rand];

		// add the character to the array of characters
		passwordChars.push(char);

		// convert array to string
		password = passwordChars.join("");
	}

	return password;
};

// ----- push the generated password to the screen -----
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
