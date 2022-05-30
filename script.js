// Assignment Code
var generateBtn = document.querySelector("#generate");

function getSpecialCharacters() {
	return confirm(
		"Would you like your generated password to contain special characters?"
	);
}

function getNumericCharacters() {
	return confirm(
		"Would you like your generated password to contain numeric characters?"
	);
}

function getLowerCaseCharacters() {
	return confirm(
		"Would you like your generated password to contain LowerCase characters?"
	);
}

function getUpperCaseCharacters() {
	return confirm(
		"Would you like your generated password to contain UpperCase characters?"
	);
}

//this function will return the clients input value of character length:
function getPasswordLength() {
	var passwordLength = prompt(
		"Please choose password length (min 8 characters, max 128 characters)"
	);
	if (passwordLength >= 8 && passwordLength <= 128) {
		return passwordLength;
	} else {
		return getPasswordLength();
	}
}

// For the client to input character length:
function generatePassword() {
	// Object that holds the chosen values:
	var passwordValues = {
		length: null,
		specialCharacters: null,
		numericCharacters: null,
		lowerCaseCharacters: null,
		upperCaseCharacters: null,
	};

	passwordValues.length = getPasswordLength();
	passwordValues.specialCharacters = getSpecialCharacters();
	passwordValues.numericCharacters = getNumericCharacters();
	passwordValues.lowerCaseCharacters = getLowerCaseCharacters();
	passwordValues.upperCaseCharacters = getUpperCaseCharacters();
	console.log(
		"🚀 ~ file: script.js ~ line 44 ~ generatePassword ~ passwordValues",
		passwordValues
	);
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function startGame() {
// 	var playerChoice = prompt("rock, paper or scissors?");
// 	if (validOptions.includes(playerChoice)) {
// 		var computerChoice =
// 			validOptions[Math.floor(Math.random() * validOptions.length - 1)];
// 		var result = getResult(playerChoice, computerChoice);
// 		playAgain(result);
// 	} else {
// 		startGame();
// 	}
// }
