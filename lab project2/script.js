let btn1=document.getElementById("btn1");
let output=document.getElementById("output");
function getDetails(){
    fetch(`https://fakestoreapi.com/products`)
  .then(response => response.json())
  .then(data => displayData(data));
}
btn1.addEventListener('click',getDetails);
function displayData(data){
    output.textContent="";
  let p1=document.createElement('p');
  let pdata=data[0].title;
  console.log(pdata)
  p1.textContent=pdata;
  output.append(p1);
  
}

let p2=document.getElementById("p2");
let product=document.getElementsByClassName("women"); // this is returning an array
//console.log[...product] ---> this will give all the divs with class name women
//console.log(product[0]) ---> this will give the first index value i.e the first div with class name women
let product2=document.getElementsByClassName("product"); 
let product3=document.getElementsByClassName("jewelery"); 
let product4=document.getElementsByClassName("electronics") 
let right=document.getElementById("right");
p2.addEventListener('click',function(e){
  p2.style.backgroundColor="blue";
  
  //product[0].style.display="none" --->we can also write like this
  [...product].forEach((e,i)=>{ 
     e.style.display="none";
  })
  
  

})