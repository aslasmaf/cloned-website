/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
    //document.getElementById("closebtn").style.display = "block";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 
  function closeNavTouch() {
    document.getElementById("mySidepanel").style.width = "0";
  } 

  function slideAnimation(slide){
    slideId = slide;
    document.getElementById(slideId).style.animation="load-me 2000ms";

  }

  function openMvn() {
    document.getElementById("MobNav").style.display = "block";
    //document.getElementById("closebtn").style.display = "block";
  }
 
