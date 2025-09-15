//Write a 'JavaScript' program to print student details using console.log() function only.

console.log("name=rohit sharma");
console.log("rollno=1001");
console.log("branch=b.tech");
console.log("address=hyderabad");
console.log("college name=naresh it");


//Write a 'JavaScript' program to declare and initialize two variable like let a=10,b=20 and print the Addition, subtraction, multiplication, division, Modulation operation and print the output on console.
let a=20;b=10;
console.log(`Addition is:${a+b}`);
console.log(`substraction is:${a-b}`);
console.log(`multiplication is:${a*b}`);
console.log(`division is:${a/b}`);
console.log(`modulus is:${a%b}`);

//Write a 'JavaScript' program to print Addition of any two positive numbers without using (+) operator and print the output on console.
console.log(`addition is:${a-(-b)}`);

//Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number and print the output on the console.
let n=23;
console.log(`result is ${(n%10)+Math.floor(n/10)}`);

//Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number and print the output on the console.
let no=123;
console.log(`result is:${(no%10)+Math.floor(no/100)}`);

//Write a JavaScript program to calculate and print the area of a square and rectangle and print the output on the console.
let s=5;l=4;b=5;
console.log(`area of square with side ${s}is${s*s}`);
console.log(`area of rectangle with length ${l} and breadth ${b} is${l*b}`);

//Write a 'JavaScript' program to swap any two integer number using third variable and print the output on the console.
let x=10;y=20;
let t;
t=x;
x=y;
y=t;
console.log(`swap result is ${x},${y}`);

//Write a 'JavaScript' program to swap any two integer number without using third variable and print the output on the console.
let i=10;j=20;
i=i+j;j=i-j;i=i-j;
console.log(`swap result without using third variable is ${i},${j}`);

//Write a 'JavaScript' program to find previous multiple of 10 of given 2 digit value only.
let value=26;
let result= Math.floor(value/10)*10;
console.log(`result is ${result}`);

// Write a 'JavaScript' program to find next multiple of 10 of given 2 digit value only.
let digit=34;
let output=Math.floor((digit/10)+1)*10;
console.log(`result is ${output}`);


