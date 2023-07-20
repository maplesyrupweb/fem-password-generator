let quoteText = document.querySelector('#password-text');
let handleCopyClick = document.querySelector('#copy-password');
        

/**
 * Generate a password
 */

function generatePassword() {

 let length = document.getElementById("charLength").value;

    console.log(length);

    document.getElementById("theLength").innerHTML = length;

    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += 
        characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("The answer is: " + result);
    document.getElementById("password-text").innerHTML = result   
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





