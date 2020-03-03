// Semi colon optional now (Was required earlier)


//strings
console.log("Omg")
console.log('Oh\'s my god')
console.log(`<p class="oh">Oh's
 no</p>`) // Most Reliable (Can use ',"" , do multiple lines )

//numbers
console.log(30*4) //+ , - , / 
console.log(30 ** 4) //For Root
console.log(33 %4) //remainder


//variables
/*  Naming variables
- Cannot start with a number
- shoulder start with a small letter
- Cannot use '-'
- Camel case multiple words
  my-credits    myCredits 
- No special character other than: _ and $ 
- Cannot use keywords
- Case sensitive myCredits and MyCredits are 2 different variables

*/
let myCredits //decalre
myCredits= 20 // assigning a value
console.log(myCredits);
//BEDMAS or PEDMS, order of operations

myCredits= 5 +2 *3;
console.log(myCredits);
myCredits= (5 +2) *3;
console.log(myCredits);
let newAddition = 7;
myCredits= myCredits + newAddition;
console.log(myCredits);
console.log(myCredits+5);//33
console.log(myCredits+2); //30
myCredits += newAddition; // Same as myCredits= myCredits + newAddition;
console.log(myCredits);
// Uninary operator ++ , -- 
myCredits++;
console.log(myCredits);
myCredits--;
console.log(myCredits);

1 + 1 // 2
'1' + '1' // 11

'1' + 1 // 11

1+1+'1' //21

console.log("You have: " + myCredits +" credits")
console.log(`You have: ${myCredits} credits`) // Template literals Only works wth back tick
console.log("You have: ${myCredits} credits")
console.log(`1 + 1 is ${1 + 1}`)
