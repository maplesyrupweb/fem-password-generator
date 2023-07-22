let quoteText = document.querySelector('#password-text');
let handleCopyClick = document.querySelector('#copy-password');

const CHARACTER_SETS = {
    uppercase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26],
    lowercase: ['abcdefghijklmnopqrstuvwxyz', 26],
    numbers: ['1234567890', 10],
    symbols: ['!@#$%^&*()', 10],
  }
  

/**
 * Generate a password
 */

function generatePassword() {

 let length = document.getElementById("charLength").value;

    console.log(length);

    // document.getElementById("theLength").innerHTML = length;

    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += 
        characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("The answer is: " + result);
    document.getElementById("password-text").innerHTML = result;
    
    checkpassword(result);
}


/**
 * Copy text to clipboard
 */

  handleCopyClick.addEventListener('click', () => {
    let text = quoteText.textContent;
    
    navigator.clipboard.writeText(`${text}`);

    console.log(text);
    alert(`Password copied to clipboard. The password is: ${text}`);
});


/**
 * Show the input range when using
 */

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);



let numberCheckBox = document.querySelector("input[id=numbers]");

numberCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Number Checkbox is checked..");
  } else {
    console.log("Number Checkbox is not checked..");
  }
});

let uppercaseCheckBox = document.querySelector("input[id=uppercase]");

uppercaseCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Uppercase Checkbox is checked..");
  } else {
    console.log("Uppercase Checkbox is not checked..");
  }
});

let lowercaseCheckBox = document.querySelector("input[id=lowercase]");

lowercaseCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Lowercase Checkbox is checked..");
  } else {
    console.log("Lowercase Checkbox is not checked..");
  }
});

let symbolsCheckBox = document.querySelector("input[id=symbols]");

symbolsCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Symbols Checkbox is checked..");
  } else {
    console.log("Symbols Checkbox is not checked..");
  }
});





var code = document.getElementById("password");
var strengthbar = document.getElementById("meter");
var strengthText = document.getElementById("strengthText");

/**
 * Event Listener for getting password strength as you type a password
 */

// code.addEventListener("keyup", function() {
//   checkpassword(code.value);
//   console.log(code.value);
// });

/**
 * Assign the password strength
 * @param {*} password 
 */

function checkpassword(password) {
  var strength = 0;
  //contains lowercase letter
  if (password.match(/[a-z]+/)) {
    strength += 1
   
  }
  //contains uppercase letter
  if (password.match(/[A-Z]+/)) {
    strength += 1;
   
  }
  //contains a number
  if (password.match(/[0-9]+/)) {
    strength += 1;
   
  }
  //contains a symbol
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }

  console.log("the strength is: " + strength);

  switch (strength) {
    case 0:
      strengthbar.value = 0;
      strengthText.innerHTML = "Weak";
      break;

    case 1:
      strengthbar.value = 25;
      strengthText.innerHTML = "Weak";
      break;

    case 2:
      strengthbar.value = 50;
      strengthText.innerHTML = "OK";
      break;

    case 3:
      strengthbar.value = 75;
      strengthText.innerHTML = "Good";
      break;

    case 4:
      strengthbar.value = 100;
      strengthText.innerHTML = "Strong";
      break;
  }

  console.log("the password strength of " + password + " is: " + strengthText.innerHTML);

}

