var myImages = [" https://image.slidesharecdn.com/africanwildanimals-140810133834-phpapp01/95/african-wild-animals-1-638.jpg?cb=1407677943",
               " https://i.ytimg.com/vi/uUkXCOru9bo/maxresdefault.jpg",
               " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKL58IqvWULCQRSf5qPUtcUwAMlHo2mroBPhGfHBBIPGhpZBi",
               " https://d2ty3p0lzh1wfl.cloudfront.net/safetyhub_images/South%20Africa/baboon-south-africa.jpg",
               " https://cdn.vox-cdn.com/uploads/chorus_image/image/56035491/Panthera_onca_at_the_Toronto_Zoo_2.0.jpg"];
var captionImages =
["wild animals of Africa","zebra", "elefants", "monkeys","cheetah"];

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
