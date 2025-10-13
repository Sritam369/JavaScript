let sp1=document.getElementById("sp1");
let sp2=document.getElementById("sp2");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
sp1.textContent=10;
sp2.textContent=0;
let m=10;
let s=60;
btn1.addEventListener('click',function(){
    btn2.addEventListener('click',function(){
      clearInterval(x);
    })
    let x=setInterval(() => {
  s--;
        sp2.textContent=s;
        if( m===0 && s===0){
            clearInterval(x);
            m=10;s=60;
        }
      
        if(s===0 ){
            s=60;
            m--;
            sp1.textContent=m;
        }
    }, 10);
})

let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let lightState = "red";
let totalTime = 0;
let intervalid = null;
let nextDelay = 0;

function turnOffAllLights() {
  btn3.style.backgroundColor = "gray";
  btn4.style.backgroundColor = "gray";
  btn5.style.backgroundColor = "gray";
}

function changeLight() {
  turnOffAllLights();

  if (lightState === "red") {
    btn3.style.backgroundColor = "red";
    nextDelay = 3000;
    lightState = "yellow";
  } else if (lightState === "yellow") {
    btn4.style.backgroundColor = "yellow";
    nextDelay = 2000;
    lightState = "green";
  } else {
    btn5.style.backgroundColor = "green";
    nextDelay = 4000;
    lightState = "red";
  }

  totalTime += nextDelay;

  if (totalTime <= 18000) {
    intervalid = setTimeout(changeLight, nextDelay);
  } else {
    clearTimeout(intervalid);
    turnOffAllLights();
  }
}

changeLight();
