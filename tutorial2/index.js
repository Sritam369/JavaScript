// Events------------
// mouse events-----------

function fun1(){
    let img=document.getElementById("img");
    img.style.position="absolute";
    img.style.top=Math.floor(Math.random()*100)+"%";
    img.style.left=Math.floor(Math.random()*100)+"%";
}

// keyboard events-------------

document.addEventListener('keydown',function(e){
    if(e.key=='g'){
        document.getElementById("para").style.color="green";
    }
    if(e.key=='r'){
        document.getElementById("para").style.color="red";
    }
    if(e.key=="ArrowUp"){
        document.getElementById("para").style.top="-20px"
    }
})

// form events---------------------

document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault()
    let inp1=document.getElementById("inp1")
    let inp2=document.getElementById("inp2")
    let inp3=document.getElementById("inp3")
  if(inp1.value.trim()==""){
    document.getElementById("p1").textContent="name is required";
  }
  else {
    document.getElementById("p1").textContent=""
  }
  if(inp2.value.trim()==""){
    document.getElementById("p2").textContent="email is required";
  }
  else {
    document.getElementById("p2").textContent=""
  }
  if(inp3.value.trim()==""){
    document.getElementById("p3").textContent="password is required";
  }
  else {
    document.getElementById("p3").textContent=""
  }
})
function fun1(){
     let inp3=document.getElementById("inp3")
    if (inp3.type==="password"){
        inp3.type="text";
    }
    else {
        inp3.type="password";
    }

}