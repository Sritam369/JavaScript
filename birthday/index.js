let d = document.getElementById('name');
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let p = document.getElementById('p2');
let d3 = document.getElementById('count');
let d4 = document.getElementById('audio');
let image = document.getElementById('img');
let para = document.getElementById('p');

let x=10;

function fun(){
if(d.value==''){
    para.textContent="enter a name"
    para.style.color="red"
}
else{
let y =setInterval(()=>{
d1.textContent=""
d1.style.display="none"
d2.style.marginTop="80px"
d2.textContent="Let the countdown begin"
d2.style.fontSize="xx-large";
d2.style.fontFamily="'Bubblegum Sans', cursive"
d3.textContent=x;
d3.style.fontSize="xx-large";
d2.style.marginTop="260px"
x--
if(x==-1){
    clearInterval(y);
    d3.textContent=""
    d2.style.marginTop="0px"
    d2.textContent="Happy birthday "+ d.value    
    d2.style.fontFamily="'Bubblegum Sans', cursive"
    d2.style.fontSize="xx-large";
    d2.style.color="#FF1493"

    let audio = document.createElement('audio');
    audio.src="./happy-birthday-254480 (1).mp3";
    audio.autoplay = true;
    d4.append(audio);
    let imag=document.createElement('img');
    imag.src="./IMG-20251218-WA0013.jpg";
    imag.height="400";
    imag.style.animation='demo 5s ease-in-out 1 forwards';
    image.append(imag);
    
}
},100)
}}


