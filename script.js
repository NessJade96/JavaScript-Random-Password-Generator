// Assignment Code
var generateBtn = document.querySelector("#generate");

//This function will return true or false into the passwordValues in the function generatePassword()
function getSpecialCharacters() {
	return confirm(
		"Would you like your generated password to contain special characters?"
	);
}

//This function will return true or false into the passwordValues in the function generatePassword()

function getNumericCharacters() {
	return confirm(
		"Would you like your generated password to contain numeric characters?"
	);
}

//This function will return true or false into the passwordValues in the function generatePassword()

function getLowerCaseCharacters() {
	return confirm(
		"Would you like your generated password to contain LowerCase characters?"
	);
}

//This function will return true or false into the passwordValues in the function generatePassword()

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

function getCharacterFromArray(characterArray) {
	var randomCharacter =
		characterArray[Math.floor(Math.random() * characterArray.length - 1)];
	randomPasswordGenerated.push(randomCharacter);
}

var randomPasswordGenerated = [];

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

	// these functions create prompt boxes and return boolean into the above passwordValues object:
	passwordValues.length = getPasswordLength();
	passwordValues.specialCharacters = getSpecialCharacters();
	passwordValues.numericCharacters = getNumericCharacters();
	passwordValues.lowerCaseCharacters = getLowerCaseCharacters();
	passwordValues.upperCaseCharacters = getUpperCaseCharacters();
	console.log(
		"🚀 ~ file: script.js ~ line 44 ~ generatePassword ~ passwordValues",
		passwordValues
	);

	var characterType = ["upper", "lower", "number", "special"];

	// this creates a for loop that will generate a random password

	for (var i = 0; i < passwordValues.length; i++) {
		characterTypeRandom =
			characterType[Math.floor(Math.random() * characterType.length)];
		console.log(
			"🚀 ~ file: script.js ~ line 76 ~ generatePassword ~ characterTypeRandom",
			characterTypeRandom
		);

		if (characterTypeRandom === "upper") {
			getCharacterFromArray(upperCasedCharactersArray);
		}

		if (characterTypeRandom === "lower") {
			getCharacterFromArray(lowerCasedCharactersArray);
		}

		if (characterTypeRandom === "number") {
			getCharacterFromArray(numericCharactersArray);
		}

		if (characterTypeRandom === "special") {
			getCharacterFromArray(specialCharactersArray);
		}
	}
	return randomPasswordGenerated.join("");
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Array of special chartacters
var specialCharactersArray = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

// Array of numeric characters
var numericCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters
var lowerCasedCharactersArray = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

// Array of uppercase characters
var upperCasedCharactersArray = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

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
