/*Write a 'JavaScript' program to store 10 elements in array and print them on a console take the inputs from the user.

let size= +prompt("enter an size");
let arr=[]
for(let i = 0;i<size;i++)
{
   arr[i] = +prompt("Enter "+i+" elements"); 
}
arr.forEach (function (e,i){
  console.log (e)
})*/
/*Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.

// let size2= +prompt("enter size");
let mixedArray=[12, "apple", 45, "banana", "cherry", 78, "orange"];
let string=[]; let number=[];
// for(let i=0;i<size2;i++){
//     mixedArray[i]= prompt("enter"+i+" elements");
// }
mixedArray.forEach(function (e,i){
    if(typeof e === "number"){
       number.push(e)
    }
    else {
        string.push(e);
    }
   
})
 console.log(number);
    console.log(string);*/

/*Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays.

let orgArray=[3,12,25,45,78];
let even=[]; let odd=[];
 orgArray.forEach(function(e,i){
    if(e%2==0){
        even.push(e);
    }
    else {
        odd.push(e);
    }
 })
 console.log(even);
 console.log(odd);*/

/*Write a 'JavaScript' program to print Sum of All array elements.

your task is to take the numbers array and the elements from the user using the prompt() function.
you have to find and print the sum of the all array elements.

 let numbers=[45,3,25,78,12];
let sum=0;
numbers.forEach(function(e,i){
    sum=sum+e;
})
console.log(sum);