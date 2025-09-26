/* - Define the array mixed of the string and number type elements.
    - separate the string and the number in separate arrays using filter() method.
   */ 
let mixedArr=['apple',10,'banana',20,'cherry',30];
let num =mixedArr.filter((e,i) =>typeof e==="number")
console.log(num);
let string= mixedArr.filter((e,i)=> typeof e === "string")
console.log(string);

/*using the filter() method separate the even and odd numbers from the array.
*/
let array=[2,3,4,5,7,8,9,10,12,13];
let x=array.filter((e,i)=>e%2==0)
console.log(x);
let y=array.filter((e,i)=>e%2!=0)
console.log(y);

/*using the reduce() method add the elements of the array into one variable.
*/
let arr=[1,2,3,4,5,6,7,8,9]
let z=arr.reduce((e,i)=> e+i)
console.log(z);

/*Write a 'JavaScript' program Convert Names to Uppercase in array using predefined method.
*/
let size=+prompt("enter size");
let arr1=[];
for(let i=0;i<size;i++){
    arr1[i]=prompt("enter "+i+" element")
}
let a=arr1.map((e,i)=> e=e.toUpperCase() )
console.log(a);

/*Write a 'JavaScript' program to Calculate Average from an Array elements using the predefined method.
*/
let size2=+prompt("enter size");
let arr2=[];
for(let i=0;i<size2;i++){
    arr2[i]=+prompt("enter "+i+" element")
}
let s=arr2.reduce((e,i)=> e+i )
let o=s/size2
console.log(o);

/*write a 'JavaScript' program to Sort the array [45, 3, 25, 78, 12] in ascending and descending order using predefined method.
*/

let size3=+prompt("enter size3");
let arr3=[]
for(let i=0;i<size3;i++){
    arr3[i]=parseInt(prompt("enter elemnts"));
}
let ascending=arr3.sort((a,b)=>a-b)
console.log(ascending);
let descending=arr3.sort((a,b)=>b-a)
console.log(descending);
