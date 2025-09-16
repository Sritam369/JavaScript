//Write a 'JavaScript' program to check and print that the given number is even or odd without using ternary operator and control statements and print the output on the console.

let a=10;
a%2==0 && console.log("even") || a%2!=0 && console.log("odd");

//Write a 'JavaScript' program to check and print the Maximum number among two numbers without using ternary operator, control statements and predefined methods.

let b=10;c=20;
b>c && console.log(`max=${b}`) || b<c && console.log(`max=${c}`);

//Write a 'JavaScript' program to check and print the Maximum number among three numbers without using ternary operator, control statements and predefined methods.

let d=10;e=200;f=134;
( d>e && d>f ) && console.log(`max=${d}`) || (e>f && e>d) && console.log(`max=${e}`) || (f>d&&f>e) && console.log(`max=${f}`);

//Write a 'JavaScript' program to check and print the Maximum number among three numbers using ternary operator.

let g=10;h=200;i=134;
(g>h&&g>i)? console.log(`max=${g}`) : (h>g && h>i) ? console.log(`max=${h}`) : (i>g && i>h) ? console.log(`max=${i}`): console.log("all are same");

//Write a 'JavaScript' program to check and print that given number is even or odd using ternary operator.

let j=10;
(j%2==0)?console.log("even"):console.log("odd");

/*A shopkeeper buys a TV set for Rs. 3500 and sells it at a profit of 27%. Apart from this a VAT of 12.7% and Service Charge is 3.87% is charged.
-------  Write a JavaScript program to Display total selling price, profit along with vat and service charge.
         To calculate the selling price, profit, VAT, and service charge, follow these steps:*/

let cost=3500;
console.log(`cost price=${cost.toFixed(2)}`);
let sell=cost+cost*(27/100);
console.log(`selling price=${sell.toFixed(2)}`);
let profit=cost*(27/100);
console.log(`profit=${profit.toFixed(2)}`);
let vat=sell*(12.7/100);
console.log(`vat =${vat.toFixed(2)}`);
let service=sell*(3.87/100);
console.log(`service charge=${service.toFixed(2)}`);
let total=sell+vat+service;
console.log(`total=${total.toFixed(2)}`);

// check if a no is pallindrome or not

let n=+prompt("enter a value");
let rev=0;
for(i=n;i!=0;i=Math.floor(i/10)){
    rev=rev*10+i%10;
}
if(rev==n){
    console.log("pallindrome");
}
else {
    console.log("not pallindrome");
} 

//write a js program that takes an integer as in put and checks whether it is a positive,negative number or zero.

let num=+prompt("enter a value");
num==0?console.log("you entered zero") : num<0 ? console.log("you entered a positive number"):num>0?console.log("you entered a positive number"):console.log("invalid input");

/* Develop a program for an online bus ticket booking platform called "Bus Ticket Booker."
------  The platform offers tickets for a fixed price of Rs. 300 per seat. However, there are discounts available for senior citizens.
        If a passenger's age is between 60 and 100 , they will receive a 20% discount on the total booking cost. Using ternary operator
*/

let t=+prompt("enter number of tickets");
let age=+prompt("enter age of passanger");
let price=300;
let totalprice=price*t;
let discount= totalprice*(20/100);
let finalprice=totalprice-discount;
(age>=60&&age<=100) ? console.log(`total cost before discount:${totalprice.toFixed(2)}\n discount amount:${discount.toFixed(2)}\n total cost after discount:${finalprice.toFixed(2)}`) : console.log(`total cost before discount:${totalprice.toFixed(2)}\n discount amount:0.00\n total cost after discount:${totalprice.toFixed(2)}`);