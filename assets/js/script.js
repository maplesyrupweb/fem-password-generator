// let passwordText = document.querySelector('#password-text');
let passwordText = document.getElementById('passwordText');
let handleCopyClick = document.querySelector('#copy-password');
const checkBoxes = document.querySelectorAll('input[type=checkbox]');
const strengthRatingBars = document.querySelectorAll('.bar');

var code = document.getElementById("password");
var strengthbar = document.getElementById("meter");
// var strengthText = document.getElementById("strengthText");

const strengthDescription = document.querySelector('.strength-rating-text');

const CHARACTER_SETS = {
    uppercase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26],
    lowercase: ['abcdefghijklmnopqrstuvwxyz', 26],
    numbers: ['1234567890', 10],
    symbols: ['!@#$%^&*()', 10],
  }
  
//------------------------------------------------------//
//           Generate random password                   //
//------------------------------------------------------//


function generatePassword() {
  
  validateInput();
  let length = document.getElementById("charLength").value;

      console.log(length);

      // document.getElementById("theLength").innerHTML = length;

  
      let generatedPassword = '';
      let includedSets = [];
      let charPool = 0;
     
      checkBoxes.forEach(box => {
        if(box.checked) {
          includedSets.push(CHARACTER_SETS[box.value][0]);
          console.log("included sets: " + includedSets );
          charPool += CHARACTER_SETS[box.value][1];
          console.log("charPool: " + charPool );
        }
      });

      console.log("checkBoxes: " + checkBoxes.length);

      if (includedSets) {
      for(let i=0; i<length; i++) {
        const randSetIndex = Math.floor(Math.random() * includedSets.length);
        console.log("randSetIndex is " + randSetIndex);
        const randSet = includedSets[randSetIndex];
        console.log("randSet is " + randSet);

        const randCharIndex = Math.floor(Math.random() * randSet.length);
        console.log("randCharIndex is " + randCharIndex);
        const randChar = randSet[randCharIndex];
        console.log("randChar is " + randChar);
        
        generatedPassword += randChar;
        console.log("generatedPassword is " + generatedPassword);
        // document.getElementById("passwordText").innerHTML = generatePassword;
      }
    }
          
      
      
      // checkpassword(generatePassword);

      // console.log("the strength is: " + strength)

      const strength = calcStrength(length, charPool);
    console.log("*** strength is " + strength);
    console.log("*** lengthSlider.value " + length);
    console.log("*** charPool is " + charPool);
    
    styleMeter(strength);

    //uncommenting below will output the entire generatePassword function
    // passwordText.innerHTML = generatePassword;
  console.log("end of generate password function");
  
 }
 

//  function generatePassword() {
  
//   validateInput();
//   let length = document.getElementById("charLength").value;

//       console.log(length);

//       // document.getElementById("theLength").innerHTML = length;

//       const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
      
//       let result = '';
//       const charactersLength = characters.length;
//       for(let i = 0; i < length; i++) {
//           result += 
//           characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       console.log("The answer is: " + result);
//       document.getElementById("password-text").innerHTML = result;
      
//       const strength = checkpassword(result);

//       console.log("the strength is: " + strength)
      


      
 
//  }




//------------------------------------------------------//
//           Copy the password to clipboard             //
//------------------------------------------------------//



  handleCopyClick.addEventListener('click', () => {
    let text = passwordText.textContent;
    
    navigator.clipboard.writeText(`${text}`);

    console.log(text);
    alert(`Password copied to clipboard. The password is: ${text}`);
});


//------------------------------------------------------//
//          Show the input range when using slider      // 
//------------------------------------------------------//

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);


//------------------------------------------------------//
//          Checkbox event listeners                    // 
//------------------------------------------------------//


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







//------------------------------------------------------//
//          Checkbox password strength                  // 
//------------------------------------------------------//

function checkpassword(password) {
  var strength = 0;
  var strenghArray = [];
  
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

  if (strength == 1) {
      strengthbar.value = 25;
      strengthbar.value = 1;
      strenghArray = ["Too Weak!!!", 1];
  }
  else if (strength == 2) {
      strengthbar.value = 50;
      strenghArray = ["Weak!!!", 2];
  }
  else if (strength == 3) {
    strengthbar.value = 75
    strenghArray = ["Medium",3];
}
else if (strength == 4) {
  strengthbar.value = 100
    strenghArray = ["Strong",4];
}
else {
  alert("error");
}
  
  console.log("the password strength of " + password + " is: " + 
  strengthText.innerHTML);
  styleMeter(strenghArray);
  console.log("do i get called");
  return strenghArray;

}




//------------------------------------------------------//
//---------------Validate checkbox input----------------//
//------------------------------------------------------//

//The Array.from() method returns an array from any iterable object.

// every() returns true if all elements in an array pass a test (provided as a function).

const validateInput = () => {
  // At least one box is checked
  if(Array.from(checkBoxes).every(box => box.checked === false)) {
    // throw new Error('Make sure to check at least one box');
    console.log("check at least one checkbox");

   

  }
  else {
    console.log("checkboxes checked)");
  }
}

// Fill in specified meter bars with the provided color
const styleBars = ([...barElements], color) => {
  barElements.forEach(bar => {
    bar.style.backgroundColor = color;
    bar.style.borderColor = color;
  });
}


// Display text description of password strength and
// fill in the appropriate meter bars
const styleMeter = (rating) => {
  const text = rating[0];
  console.log("the text is: " + text);
  const numBars = rating[1];
  console.log("the numBars is: " + numBars);
  const barsToFill = Array.from(strengthRatingBars).slice(0, numBars);
  
  resetBarStyles();

  strengthDescription.innerHTML = text;

  switch(numBars) {
    case 1:
      return styleBars(barsToFill, 'hsl(0, 91%, 63%)');
    case 2:
      return styleBars(barsToFill, 'hsl(13, 95%, 66%)');
    case 3:
      return styleBars(barsToFill, 'hsl(42, 91%, 68%)');
    case 4:
      return styleBars(barsToFill, 'hsl(127, 100%, 82%');
    default:
      // throw new Error('Invalid value for numBars');
      
  }
}

// Remove colors applied to the strength meter
const resetBarStyles = () => {
  strengthRatingBars.forEach(bar => {
    bar.style.backgroundColor = 'transparent';
    bar.style.borderColor = 'hsl(252, 11%, 91%)';
  });
}

// Calculate password entropy to determine strength
// Return an array containing
// the password strength description to display and the number
// of bars in the meter to be filled
const calcStrength = (passwordLength, charPoolSize) => {
  const strength = passwordLength * Math.log2(charPoolSize);

  if(strength < 25) {
    return ['Too Weak!', 1];
  } else if (strength >= 25 && strength < 50) {
    return ['Weak', 2];
  } else if (strength >= 50 && strength < 75) {
    return ['Medium', 3];
  } else {
    return ['Strong', 4];
  }
}
