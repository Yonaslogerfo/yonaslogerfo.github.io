var myImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JQ2r9bXui9n-2Tts0de-C2IhNzK6VgwHbKGzUTatAjfsiaby ", 
               " https://www.ufaw.org.uk/images/about-ufaw/ufaw-strategy-page-main-photo.jpg", 
               "https://i.kinja-img.com/gawker-media/image/upload/s--O_maD0YQ--/c_scale,f_auto,fl_progressive,q_80,w_800/kdrf3krypm6wk5hbhzme.jpg ", 
               " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE48hQJjJjLh3bblezF7013m954KJm_NeZ87cj1QTu577HUYC",
               " https://images.theconversation.com/files/217599/original/file-20180503-153895-mwmz4a.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"]; 
var captionImages = 
["lion","zebra", "bear", "hiposs","birds"]; 

 var index=0; 
 function updateImage(){ 
 document.getElementById("slideshow").src = myImages[index]; 
 document.getElementById("slideshow").alt= captionImages[index]; 
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){ 
 if (myImages.length == index+1) 
 index=0; 
 else 
 index++; 
 updateImage(); 
} 


function back(){ 
 if (index===0) 
 index=myImages.length-1; 
 else 
 index--; 

 updateImage(); 
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false); 
nextButton.addEventListener("click",next,false); 
function autoSlide(){ 
if (document.getElementById("auto").checked) 
 next(); 
} 
setInterval(autoSlide,3000); // Next 
