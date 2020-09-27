/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
    //document.getElementById("closebtn").style.display = "block";
    document.getElementById("nav-menu").style.display = 'none';
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("nav-menu").style.display = "block";
  } 
  function closeNavTouch() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("nav-menu").style.display = "block";
  } 

  function slideAnimation(slide){
    slideId = slide;
    document.getElementById(slideId).style.animation="load-me 2000ms";

  }

  //Mobile view slideshow 
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("m-v-Slides");
    //var slides_inner = document.getElementsByClassName("slide-inner");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.animation = "m-v-animation 500ms";
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block";
  }