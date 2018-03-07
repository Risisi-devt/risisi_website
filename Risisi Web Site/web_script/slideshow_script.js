
var slideIndex = 0;
showSlides();

function showSlides() {
    var i=0;
    var slides = document.getElementsByClassName("slide_container");
    
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}    
    
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


web_risisi_ss_reset(slideCount);

// Next/previous controls
function plusSlides(n) {
  web_risisi_ss_reset(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  web_risisi_ss_reset(slideIndex = n);
}

function web_risisi_ss_reset(n) {
  var i;
  var slides = document.getElementsByClassName("slide_container");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
 
}