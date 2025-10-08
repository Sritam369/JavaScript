let imgArray=["img1.jpeg","img2.jpeg","img3.jpeg"]
    let i=0;

    function displayImage()
    {
         document.getElementById('i1').src=imgArray[i]
    }
function nextimg(){
    i++;
    if(i>imgArray.length){
        i=0;
    }
    displayImage();
   
}
function previmg(){
    i--;
    if(i<0){
        i=imgArray.length-1;
    }
    displayImage();
}