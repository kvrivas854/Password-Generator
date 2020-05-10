// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","%","^","&","*","()","_","+","~","`","|","}","{","[","]",":",";","?",">","<",",",".","/","-","=","'",";"];


// User input for password criteria
var userPasswordCapital = confirm("Would you like to include capital letters in your password?");
var userPasswordNumber = confirm("Would you like to include numbers in your password?");
var userPasswordSpecialCharacter = confirm("Would you like to include special characters in your password?");
var userPasswordLength = prompt("How many characters would you like to include in your password?");

//  Setting a variable to contain the password as a string
var thePassword = "";

// Defining the generatePassword function so that when I click the button the password is input and able to be viewed on the DOM
function generatePassword(){

  //  creating an object to contain the parameters for the password
    function passwordParameters() {
      // Does the user want to include capital letters in their password?
      function letterCase() {

        if (userPasswordCapital === true) {
          return Math.floor(Math.random() * alphaCapital.length);
            // pull from the capital array; use math.random to a random number, and then when you call the function, you'll do the array name.index number
          }

          else if (userPasswordCapital === false) {
            return Math.floor(Math.random() * alphaLowerCase.length);
            //  pull from the alphaLowerCase array

          }
      };
      // Does the user want to include numbers in their password?
      function numberCheck() {
        if (userPasswordNumber === true) {
          return Math.floor(Math.random() * number.length);
        }
      };
      // Does the user want to include special chracters in their password?
      function specialCharactersCheck() {
        return math.floor(Math.random() * specialCharacters.length);
      }
    };
    
//  How many characters does the user want their password to be?
  function passwordLength()  {
  
  if (userPasswordLength <8) {
    alert ("Your password must be at least 8 characters long");
    prompt("How many characters would you like to include in your password?");
    return(this.userPasswordLength);
  }

  else if (userPasswordLength > 128) {
    alert("Your password cannot exceed 128 characters");
    prompt("How many characters would you like to include in your password?");
    return(this.userPasswordLength);
  }
  else if (userPasswordLength > 8 || userPasswordLength < 128 || userPasswordLength == 128) {
    return (this.userPasswordLength);
    }
  }
};

function writePassword() {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  thePassword.


  passwordText.value = password;


}
// A for loop is added so that it loops through the functions in my object to generate indice from the chracters output variable based on the user output letters
for (var i=0; i < userPasswordLength; i++) {
  console.log(passwordParameters.letterCase(alphaCapital));
  console.log(passwordParameters.numberCheck(number));
  console.log(passwordParameters.specialCharactersCheck(specialCharacters));
  console.log(passwordParameters.passwordLength());


}


  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


