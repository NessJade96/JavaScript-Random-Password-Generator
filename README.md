# JavaScript-Random-Password-Generator

# Description:

A simple random password generator made using HTML, CSS, and JavaScript.

# Planning Notes:

Create a prompt to display when the button "generate password' is clicked.

This prompt will display password critetia, password length\*, for eg. the first will display Numbers, second, uppercase, third, Special characters, and finally, lower case. So create 4 promt windows (4 functions?)

\*password length <=8 charaters and =<128 characters

At least one of the character type prompts has to be selected, as well as the password length chosen.

The password is then created and displayed in an alert or written to the page.

# Screenshots:

![Screenshot1](./Screenshots/Screenshot%202022-06-01%20151041.jpg)
![Screenshot2](./Screenshots/Screenshot%202022-06-01%20151119.jpg)

# Links:

GitHub repo: https://github.com/NessJade96/JavaScript-Random-Password-Generator
Deploy: https://nessjade96.github.io/JavaScript-Random-Password-Generator/

# Commit notes:

Commit 1:
Created repo on Gibhub, then copied the supplied HTML, CSS, and Javascript files. Created the README.md, and made planning notes.

Commit 2:
Using the provided script.js code, I am creating a generatePassword function to start the prompts - within this function it will call the getPasswordLength function to return the value of the password length. Then I have created confirm prompts for the Special characters to return a true or false value and so on for each of the passwords criteria.

Commit 3:
Creating a for loop that takes in the values of the true/false from the passwordValues prompts - that tests if it is upper, lower, number, or special. If it is any of those values then it will input one element from the array at random. This will return a randomly generated password with the selected criteria. Added in screenshots and links :)
