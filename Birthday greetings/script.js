let d=document.getElementById("d");
let d1=document.getElementById("d1");
let imag=document.getElementById("img");
let x=11;
let y=setInterval(()=>{
    d1.textContent="Let The Countdown Begin";
    d1.style.color="white"
    x--
    d.textContent=x;
    d.style.color="white"
    if(x==0){
       clearInterval(y);
       d1.textContent=""
       d.textContent="Happy Birthday My Love"
       d.style.color="green"
       let img=document.createElement('img');
       img.src="./IMG20250227172612.jpg";
       img.height="300"
       imag.append(img);
    }
},1000)