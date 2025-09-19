//Calculating Sum of First 'N' Numbers

let n=+prompt("enter a number");
let sum=0;
let i;
for(i=1;i<=n;i++){
  sum=sum+i;
  console.log(`Adding 1: Current sum: ${sum}`);
}

/*Displaying Progress Bar Segments
   Progress: *
            Progress: **
            Progress: ***
            Progress: ****
            Progress: ******/

let totalSegments=+prompt("enter a value");
let char="*";
for(let i=1;i<=totalSegments;i++){
  let str="progress "
    for(let j=1;j<=i;j++){
       str+=char+" ";
    }
         console.log(str);
   
}

/*Basic Password Complexity Checker (Fixed Length)
password = Pass123
    Sample output: --- Password Complexity Check for 'Pass123' ---
            Password strength: Strong (Contains digit and uppercase).
            --- Check Complete ---*/

let pass=prompt("enter password");
let uppercase=false;
let lowercase=false;
let digit=false;
for(let i=0;i<=pass.length-1;i++){
  if(pass[i]>='A'&& pass[i]<='Z' || pass[i]>='a'&&pass[i]<='z'){
     if(pass[i]>='A'&& pass[i]<='Z'){
      uppercase=true;
     }
     else {
      lowercase=true;
     }
    }
     else if(pass[i]>='0'&&pass[i]<='9'){
         digit=true;
     }
     if(uppercase&&digit){
      console.log("strong");
     }
      else if(lowercase&&digit){
        console.log("medium");
      }
      else if(uppercase){
        console.log("medium");
      }
     }

/*Estimating Probability with Fixed Number of Trials
  sample input : numberOfTrials = 50
        sample output:  50 Coin Toss Trials
                Total Heads: 19
                Estimated Probability of Heads: 38.00%*/

let n=+prompt("enter a value");
let avg;
let heads=0;
let sum=0;
for(let i=1;i<=n;i++){
  let trials=Math.random();
if(trials<=0.5){
  heads++;
  sum=sum+heads;
  avg=sum/heads;
}
}
console.log(`number of trials is : ${n}`);
console.log(`total heads= ${heads}`);
console.log(`estimated probability of heads= ${avg.toFixed(2)}`);