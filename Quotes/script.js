let div1=document.getElementById("d1");
function getQuotes(){
    fetch(`https://dummyjson.com/quotes/random`).then((res)=>res.json()).then((data)=>display(data)).catch((err)=>console.log(err));
}

  function display(data){
  div1.textContent="";
 let h2=document.createElement('h2');
  h2.textContent=data.quote;
  let p=document.createElement('p');
  p.textContent="-"+data.author;
  p.style.fontStyle="italic"
  div1.append(h2,p);
}

setInterval(getQuotes,5000);   