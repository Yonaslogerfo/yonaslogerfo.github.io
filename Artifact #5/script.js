var myImages = [" http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg", 
                " https://www.ufaw.org.uk/images/about-ufaw/ufaw-strategy-page-main-photo.jpg", 
                " https://i.kinja-img.com/gawker-media/image/upload/s--O_maD0YQ--/c_scale,f_auto,fl_progressive,q_80,w_800/kdrf3krypm6wk5hbhzme.jpg", 
                " https://i.kinja-img.com/gawker-media/image/upload/s--BeDpvmEr--/c_scale,f_auto,fl_progressive,q_80,w_800/ufwvemb1ysmjsmkk3ms3.jpg",
                " https://i.ytimg.com/vi/NGnqAIwHfzI/maxresdefault.jpg"]; 
var captionImages = 
    ["Lion!","Zebras!", "Bear!", "Dolphines!","Gorela and Tiger!"]; 

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
