/* We need to determine if a user's account is currently active or inactive to allow or deny certain operations, such as making a purchase.

- This if-else statement checks the boolean value of isAccountActive. If isAccountActive is true, the user is permitted to proceed; otherwise, they are informed that their account is inactive.*/

let isAccountActive=+prompt("enter a boolean value");
if(isAccountActive == true){
    console.log("Your account is active. you can proceed with your transaction");
}
else {
    console.log("your account is currently inactive.please contact support ");
}

 /*A user is setting a new password, and we need to ensure it meets a minimum length requirement.

- This if-else statement checks if the password string's length is at least 8 characters. If it is, the password is considered valid; otherwise, an error message is displayed.
*/
let password= prompt("enter your password");
if(password.length>=8){
    console.log("password meets minimum length requirements.good job!");
}
else {
    console.log("password is too short. please use at least 8 characters.");
}

/*Take the input from the user and based on the user spending assign the loyalty tier as
    -    ' Platinum if spendings are more than 1000 ' ,
    -    ' Gold if the spendings are more than 500 ',
    -    ' Silver if the spendings are more than 100 ' else ' bronze '.

    sample input : totalSpending = 1200
    sample output : Customer's total spending: $1200. Loyalty Tier: Platinum.*/

let totalspending=+prompt("enter a value");
if(totalspending>=1000) {
    console.log(`customer's total spending is $${totalspending}. loyality tier: platinum`);
}
else if(totalspending>=500){
    console.log(`customer's total spending is $${totalspending}. loyality tier: gold`);
}
else if(totalspending>=100){
    console.log(`customer's total spending is $${totalspending}. loyality tier: silver`);
}
else {
     console.log(`customer's total spending is $${totalspending}. loyality tier: bronze`);
}

/*take the speed input from the user based on decide the classification. if the vehicle speed is less than 30 its slow, if it is greater than 30 and less than 60 then its normal , if it is greater than 60 and less than 90 its fast, else its Excessive.

    sample input : vehicleSpeed = 75
    sample output: Vehicle speed: 75km/h. Classification: fast*/

let vehiclespeed=+prompt("enter speed");
if(vehiclespeed<30){
    console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: slow`);
}
else if(vehiclespeed>=30&&vehiclespeed<60){
    console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: normal`);
}
else if(vehiclespeed>=60&&vehiclespeed<90){
    console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: fast`);
}
else {
    console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: excess`);
}

/*You have to achieve this functionality using the nested if
        1) if the user is member and purchase amount is greater than 200 apply 15% discount.
        2) if the user is member and purchase amount is greater than 100 apply 10% discount.  
        3) if the user is member and purchase amount is less than 100 :  Member, but purchase total is too low for an extra discount.
        4) if the user is not a member and purchase amount is greater than 500 apply 5% discount general discount.
        5)  if the user is not a member and purchase amount is less than 500 : User is not a member. No member discounts apply.

    Sample input :     isMember = true
            purchaseTotal = 250
    Sample output :  User is a member.
             Qualifies for a 15% member discount!
             Original Price: $250.00, Final Price: $212.50 */

let ismember=+prompt("enter true or false");
let total=+prompt("enter purchase value");
let final;
if(ismember == true){
    console.log("user is a member");
    if(total>200){
       console.log("qualifies for a 15% member discount.");
       final=total-(total*(15/100));
       console.log(`original price:$${total}, final price:$${final.toFixed(2)}`);
    }
    else if(total>100&&total<=200){
       console.log("qualifies for a 10% member discount.");
       final=total-(total*(10/100));
       console.log(`original price:$${total}, final price:$${final.toFixed(2)}`);
    }
    else if(total<100){
       console.log("No member discount apply.");
       console.log(`original price:$${total}, final price:$${total.toFixed(2)}`);
    }
    else if(total>500){
       console.log("qualifies for a 10% member discount.");
       final=total-(total*(5/100));
       console.log(`original price:$${total}, final price:$${final.toFixed(2)}`);
    }
}
else {
    console.log("user is not a member. no member discount apply");
    if(total>500){
        final=total-(total*(5/100));
        console.log("qualifies for a 5% general discount on large order.");
         console.log(`original price:$${total}, final price:$${final.toFixed(2)}`);
    }
    else {
        console.log(`original price:$${total}, final price:$${total.toFixed(2)}`);
    }
    }

//Display the name of the day based on a numerical representation (e.g., 1 for Monday, 2 for Tuesday).

let day=+prompt("enter daynumber");
switch(day){
    case 1: console.log(`day number ${day} is monday`);break;
    case 2: console.log(`day number ${day} is tuesday`);break;
    case 3: console.log(`day number ${day} is wednesday`);break;
    case 4: console.log(`day number ${day} is thursday`);break;
    case 5: console.log(`day number ${day} is friday`);break;
    case 6: console.log(`day number ${day} is saturday`);break;
    case 7: console.log(`day number ${day} is sunday`);break;
    default: console.log("invalid day number");
    
}

let num1=+prompt("enter a number");
let num2=+prompt("enter a number");
let operator=prompt("enter an operator");
switch(operator){
    case "+": console.log(`result of${num1} ${operator} ${num2} is: ${num1+num2}`);break;
    case "-": console.log(`result of${num1} ${operator} ${num2} is: ${num1-num2}`);break;
    case "*": console.log(`result of${num1} ${operator} ${num2} is: ${num1*num2}`);break;
    case "/": if(num2==0){
        console.log("Error:Division by zero");} else {console.log(`result of${num1} ${operator} ${num2} is: ${num1/num2}`)};break;
    default: console.log("invalid operator");
    
}