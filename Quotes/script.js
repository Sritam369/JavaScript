let btn=document.getElementById("btn2");
let outputdivv=document.getElementById("out");
function getQuotes(){
 fetch(`https://dummyjson.com/quotes/random`).then((res)=>res.json()).then((data)=> displayData(data)).catch((err)=>console.log(err))
}
btn.addEventListener('click',getQuotes);
function displayData(data){
    let pq=document.createElement('h2');
    pq.textContent="free quote : "+data.quote;
    outputdivv.appendChild(pq);
}