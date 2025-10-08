/*Displaying a Welcome Message (document.getElementById(), textContent)
You have a simple webpage with an empty paragraph element that needs to display a welcome message
once the page loads. How would you use JavaScript to put "Welcome to our website!" inside that paragraph?*/

document.getElementById("para").textContent="welcome"

/*Changing Button Text on Click (addEventListener, id, textContent)
You have a button that says "Click Me". When a user clicks it, you want the button's text to change to
"Clicked!".*/

function fun1(){
    let b=document.getElementById("btn");
    b.textContent="clicked";
}

/*Changing Background Color (document.body, style.backgroundColor)
You want to add a feature where clicking a button changes the entire webpage's background color to a new
color (e.g., "lightblue").*/

function fun2(){
    let body=document.getElementById("b");
    body.style.backgroundColor="blue";
}

/*Hiding and Showing an Image (style.display, style.visibility)
You have an image on your page. You want to create a toggle button that hides the image when clicked
once, and shows it again when clicked a second time.*/

function fun3(){
    let img=document.getElementById("image");
    img.classList.toggle("hide")
    
}

/*Listing Items by Class Name (document.getElementsByClassName(), for...of loop,
textContent)
Scenario Question: You have multiple list items that share a common CSS class (e.g., "list-item"). You
want to iterate through all these items and print their text content to the console.*/

let s=document.getElementsByClassName("list")
for(let i of s){
    console.log(i.textContent)
}

/*Changing Text for All Paragraphs (document.querySelectorAll(), forEach,
textContent)
You have several paragraph elements (<p>) on your webpage, and you want to change the text content of all
of them to a generic message like "This paragraph has been updated!".*/

let paras=document.querySelectorAll(".para");
paras.forEach((e,i)=>e.textContent="this para is updated")

let pa=document.querySelectorAll(".para")[1]
console.log(pa)