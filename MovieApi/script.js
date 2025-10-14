let inp=document.getElementById("inp");
let btn1=document.getElementById("btn1");
let output=document.getElementById("output");
let getMovieDetails=async()=>{
    try{
        let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=7ddc920d`)
        let data=await res.json();
        displayData(data)
    }
    catch(err){
        console.log(err)
    }
}
btn1.addEventListener('click',getMovieDetails);
function displayData(data){
    output.textContent="";
let mname=document.createElement("h2");
mname.textContent=data.Title;
let mimg=document.createElement("img");
mimg.src=data.Poster;
output.append(mimg,mname);
}