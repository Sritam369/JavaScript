/*Basic Password Strength Validator
--------
Description :
    Stronger passwords are essential for security. This function will perform two checks: length and character type (digit presence). Both must pass for the password to be considered     "strong enough."*/
    
function checkPasswordStrength(a,b){
    let hasDigit=false;
    if(a.length<b){
     return false;
    }
    for(let i of a){
        if(i>=0 && i<=9){
            hasDigit=true;    
        }
    }
    return hasDigit
}
let pass=prompt("enter a password");

let value=checkPasswordStrength(pass,8);
console.log(value);

/*Character Type Analyzer (Word Contains Vowel & Consonant)
--------
    - Create a function that checks if a single given word contains at least one vowel AND at least one consonant (non-vowel letter).*/

function analyzeVowelAndConsonant(a){
    let vowel=false;
    let consonant=false;
    for(let i of a){
        i.toLowerCase();
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            vowel=true;
        }
        else {
            consonant=true;
        }
    }
    if(vowel && consonant){
        console.log("The string contains vowels and consonants");
    }
    else if(vowel){
         console.log("The string contains vowels ");
    }
    else {
         console.log("The string contains consonants");
    }
}
let word=prompt("enter a word");
let values=analyzeVowelAndConsonant(word);

/*Create a function expression that reverses a given string. For example, "hello" becomes "olleh".*/

let string=function(a){
    let reversedString=" ";
    for (let i=a.length;i>=0;i--){
       reversedString=reversedString+a.charAt(i); 
    }
    return reversedString;
}
let words=prompt("enter a word");
console.log(string(words));

/*Simple Username Case Converter    (Arrow Function)--------
    - Create an arrow function that takes a username string and returns it converted to all lowercase for standardization.*/
let string1=(a)=> {
   return a.toLowerCase();
}
let strings=prompt("enter a string");
console.log(string1(strings));