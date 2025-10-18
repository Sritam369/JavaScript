/* Basic Calculator - Adding Numbers (using Named functions)
--------
Description -
    Imagine you're building a simple web-based calculator. When a user inputs two numbers and clicks "Add", 
    you need a reliable way to perform this basic arithmetic operation. A named     function is perfect for this because adding numbers is a common,
     repeatable task.
*/

let btn=document.getElementById("btn");
let inp=document.getElementById("inp");
let inp2=document.getElementById("inp2");
let inp3=document.getElementById("inp3");
btn.addEventListener('click',add);
function add(){

  inp3.value=parseInt(inp.value)+ parseInt(inp2.value)
}


/*Personalized Greeting Message
--------
Description :
    When a user logs into their account (e.g., on a social media site, an online store, or a news portal), you want to greet them by name.
     Instead of writing console.log("Hello,     [username]! Welcome back!"); everywhere, a function makes this greeting consistent and easy
      to update.*/
let div=document.getElementById("d2")
let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let input3=document.getElementById("input3")
let input4=document.getElementById("input4")
 
function create(user){
    return `Hello${user.name}`
}
let user1={
    name:"sritam"
}
console.log(create(user1))

/* Merge two arrays
--------
Description :
   Write a JavaScript program to merge two arrays by removing duplicate values.
Steps:*/

let arr1=[1,2,3,4];
let arr2=[2,3,4,5,6];
let arr3=[...arr1,...arr2] // or we can write arr1.concat(arr2)
console.log(arr3);
let arr4=[...new Set(arr3)]
console.log(arr4)


/*
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];
// Output: { admin: [...], user: [...] }


let x=users.filter((e,i)=>{
    return e.role=="admin"
})
let y=users.filter((e,i)=>{
    return e.role=="user"
})
console.log(x);
let obj={
    admin:x,
    user:y
};
console.log(obj)*/


/*const nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(4))*/

const arr = ['a', 'b', 'a', 'c', 'a', 'b'];
let ghi=arr.sort((a,b)=>
   arr.filter(v=> v===b).length-arr.filter(v=> v===a).length
)[0];
console.log(ghi)


const arr5 = [1, 2, 3, 4, 5, 6, 7];
function chunkArray(arr5,size){
     const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;

}
console.log(chunkArray(arr, 2));
