/*   Implement a simple countdown timer that displays numbers decreasing from a starting point until zero.

- The while loop continues as long as countDown is greater than or equal to 0. In each iteration, it prints the current count and then decrements countDown, moving closer to the loop's termination.

    Sample input :  countDown = 5
    sample output : --- Countdown Start ---
            5
            4
            3
            2
            1
            0
 */           
let a=+prompt("enter a value");
if(a<0){
    console.log("Loop condition false initially, negative values are not allowed");
}
else {
while(a>=0){
    console.log(a);
    a--;
}
}

/*you have to write a JavaScript program to allow the user to attempt the login for certain number of times if user fails the every login attempt lock the user account
sample output : Attempt 1:Enter your password. (2 attempts left)
                Incorrect password. Please try again.
            Attempt 2:Enter your password. (1 attempts left)
                Incorrect password. Please try again.
            Attempt 3: Enter your password. (0 attempts left)
                Incorrect password. No attempts left. Account locked.*/

let attempts=3;
let correctPassword="secret123";
let enteredPassword=prompt("enter password");
if(enteredPassword==correctPassword){
    console.log(`(${attempts} attempts left)`);
    console.log("LogIn Successful");
}
else {
    
    while(attempts>0){
      attempts--;
      if(enteredPassword==correctPassword){
         console.log(`(${attempts} attempts left)`);
    console.log("LogIn Successful"); break;
      }
      else if(attempts==0){
       console.log(`(${attempts} attempts left)`);
      console.log("No Attempts left . Account locked.");
      }
      else{
      console.log(`(${attempts} attempts left)`);
      console.log("Incorrect Password. Please try again");
      enteredPassword = prompt("enter password");}
     
    }
     
}

/*Process incoming data or user input until a specific "stop" value is encountered.
   --- Data Processing Start ---
            Processing data: READ DATA
            Processing data: READ DATA
            Processing data: ANOTHER DATA POINT              // after this user enters the 'Stop' and loop breaks
            --- Data Processing Complete. Total items: 3 ---*/

let data=prompt("enter data");
let i=1;
while(data!='stop'){
    console.log("processing data: read data");
     data=prompt("enter data");
     i++;
}
     console.log("processing data: another data point");
console.log(`data processing complete. total items: ${i}`);

/*  Resource Loading Until Completion    (while loop)
 sample input :  loadProgress = 0
            maxLoadIncrement = 25

    sample output : --- Resource Loading Started ---
            Loading... 27%
            Loading... 50%
            Loading... 63%
            Loading... 79%
            Loading... 100%
            --- Resource Loading Complete! ---*/
let loadProgress=0;
let maxLoadIncrement=25;
while(true){
  loadProgress+= Math.floor(Math.random()*maxLoadIncrement)+5;
  if(loadProgress<=100)
  {
      console.log(`loading...${loadProgress}%`);
  }
  else{
    break;
  }
}
console.log("resource loading complete");

/*Generating Random Numbers Until a Target is Met
 sample input :   targetNumber = 7
             currentNumber = 0
             attempts = 0

    sample output :
            --- Generating Random Number ---
            Attempt 1: Generated 10
            Attempt 2: Generated 10
            Attempt 3: Generated 4
            Attempt 4: Generated 3
            Attempt 5: Generated 8
            Attempt 6: Generated 2
            Attempt 7: Generated 6
            Attempt 8: Generated 8
            Attempt 9: Generated 7
            --- Target number 7 reached in 9 attempts! ---*/

let target=7;
let currentnumber;
let attempt=0;
while(currentnumber!=target){
    currentnumber=Math.floor(Math.random()*10)+1;
  attempt++;
  console.log(`attempt${attempt}: generated ${currentnumber}`);
}
console.log(`target number ${target} acheived in ${attempt} attempts`);
