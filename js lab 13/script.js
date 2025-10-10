let p1=document.getElementById("container");
let p2=document.getElementById("d1");
let p3=document.getElementById("d2");
let p4=document.getElementById("para");
let k=0;
let x=setInterval(()=>{
    k++;
    if(k==100){
        clearInterval(x);
        p3.textContent="Loading completed";
        p3.style.left="0px"
        p3.style.color="green"
        p1.style.display="none" 
    }
   p4.textContent=k+"%";
   p2.style.backgroundColor="green";
   p2.style.width=k+"%"
},50)