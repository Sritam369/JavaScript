let p1=document.getElementById("p1");
let btn1=document.getElementById('btn1');
let timer=setTimeout(function(){
    p1.textContent="hi"
},5000)
p1.textContent="bye"
btn1.addEventListener('click',function(){
   clearTimeout(timer)
})

let d1=document.getElementById("d1");
let btn2=document.getElementById('btn2');
let timer2=setInterval(function(){
    d1.textContent="hi"
},2000)
d1.textContent="bye"
btn2.addEventListener('click',function(){
   clearInterval(timer2)
})

let p2=document.getElementById("p2");
let timer3=10;
setTimeout(() => {
    p2.textContent="welcome"
    
},500);
let stopTimer=setInterval(() => {
    p2.textContent=timer3--
    if(timer3==-1){
        p2.textContent="happy new year"
        clearInterval(stopTimer);
    }
},1000);

let s1=document.getElementById("s1")
let s2=document.getElementById("s2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let minute=5;
let second=0;
s1.textContent=minute;
s2.textContent=second;
second=60;
minute=4
btn3.addEventListener('click',function(){
     btn4.addEventListener('click',function(){
        clearInterval(stopwatch)
    })
     let stopwatch=setInterval(() => {
        second-- 
      s2.textContent=second 
       if(second==0 && minute==0){
            clearInterval(stopwatch)
              second=60;
              minute=6  
        }
      if(second==0){
        second=60;
        minute--
        s1.textContent=minute  
      }
    }, 20);
   
})
