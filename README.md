# JavaScript-Random-Password-Generator

A simple random password generator made using HTML, CSS, and JavaScript.

# Planning Notes:

Create a prompt to display when the button "generate password' is clicked.

This prompt will display password critetia, password length\*, for eg. the first will display Numbers, second, uppercase, third, Special characters, and finally, lower case. So create 4 promt windows (4 functions?)

\*password length <=8 charaters and =<128 characters

At least one of the character type prompts has to be selected, as well as the password length chosen.

The password is then created and displayed in an alert or written to the page.

# Description:

# Screenshots:

# Links:

# Commit notes:

Commit 1:
Created repo on Gibhub, then copied the supplied HTML, CSS, and Javascript files. Created the README.md, and made planning notes.

Commit 2:
Using the provided script.js code, I am creating a generatePassword function to start the prompts - within this function it will call the getPasswordLength function to return the value of the password length. Then I have created confirm prompts for the Special characters to return a true or false value and so on for each of the passwords criteria.

//Array of special chartacters
var specialCharacters = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'
];
​
// Array of numeric characters
var numericCharacters = [
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9'
];
​
// Array of lowercase characters
var lowerCasedCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];
​
// Array of uppercase characters
var upperCasedCharacters = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
];
