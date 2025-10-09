/*Capture the keydown event using addEventListener in javascript and display the pressed key in the
paragraph tag.*/

let pa=document.getElementById("p");
addEventListener('keydown',function(e){
    pa.textContent=e.key
})
/*You have a textarea and a display area. Each time the user enter the text in textarea, you want to display the
current word count in the display area if user enters the word length more than 100 display a message in red
color “you reached a limit”.*/

let input=document.getElementById("inp");
let para=document.getElementById("pa");
addEventListener('input',function(e){ 
para.textContent=input.value.length
if(input.value.length>100){
    para.textContent="you reached a limit"
    para.style.color='red';
}
})

/*You have a text input field. As the user types into it, you want the text they are typing to automatically
convert to uppercase in real-time.*/

let input2=document.getElementById("inp2");
addEventListener('input',function(e){
input2.value=input2.value.toUpperCase();
})

/*You have a textarea and a div. When the user enter a text into the textarea you have to display the text of the
value entered in textarea in the div.*/

let text=document.getElementById("txt");
let divv=document.getElementById("d");
addEventListener('input',function(){
    divv.textContent=text.value
})