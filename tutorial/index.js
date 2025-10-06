/*let r=+prompt("enter radius"); // use +prompt to convert a string to number
const pi=3.14;
console.log("area of circle" + (pi*r*r));

let n=25.4168;
console.log(typeof n);
console.log (n.toFixed(2));
console.log(n.toPrecision(3));
console.log(n.toString());
console.log(n.toString(2));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.ceil(Math.random()*6)); // to get random value from 1 to 6.
console.log(Math.ceil(Math.random()*7)+6); // to get random value from 7 to 14.
let name="sritam";
console.log(`my name is name`);
console.log(`my name is ${name}`);
let str="JavaScript";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(2));
console.log(str.indexOf('J'));
console.log(str.lastIndexOf('a'));
console.log(str.lastIndexOf('a'));
console.log(str.slice(1,5));
console.log(str.split('a'));
console.log(str.split('a').length-1); // this gives how many a's are there in javascript
console.log(str.split('a').length-1 + str.split('e').length-1+ str.split('i').length-1 +str.split('o').length-1+str.split('u').length-1);// to find how many vowels are there in javascript
console.log(str.length- (str.split(' ').length-1+str.split('a').length-1 + str.split('e').length-1+ str.split('i').length-1 +str.split('o').length-1+str.split('u').length-1)) // to find no of consonants in javascript
*/


// DOM Manipulation---------------------------

/*let input=document.getElementById('inp');
let h=document.getElementById('head');
let p=document.getElementById('para');
function fun(){
    //alert(`your string is ${input.value}. Total num of characters are ${input.value.length}`);
    
    if(input.value%2==0){
        p.textContent="even"
        p.style.color="green";
        p.style.fontSize="48px"
       // h.style.backgroundColor="black";
       // input.innerHTML="<img src="./g.png" alt="goo">"
    }
    else if(input.value%2!=0) {
        p.textContent="odd"
        p.style.color="red"
        p.style.fontSize="48px"
    }
}*/

// DOM Creation-------------------
function addpara(){
    let pa=document.createElement('p');
    pa.textContent="hello";
    document.getElementById('para').appendChild(pa)
}
function addimg(){
  let image=document.createElement('img');
  image.src="./g.png";
  document.getElementById('image').appendChild(image);
}
let inputUrl=document.getElementById('url');
let inputText=document.getElementById('name');
let outputDiv=document.getElementById('output');
function add(){
    let divv=document.createElement('div');
    let image=document.createElement('img');
    image.src =inputUrl.value;
    let para=document.createElement('p');
    para.textContent=inputText.value;
    divv.append(image,para);
    outputDiv.appendChild(divv);
}











