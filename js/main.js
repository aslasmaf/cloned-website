function display_slide_1(){
    // Display the first slide
    document.getElementById("s1").style.display='block';
    document.getElementById("s2").style.display='none';
    document.getElementById("s3").style.display='none';
   //change the color
    document.getElementById("s1sh").style.color='red';
    document.getElementById("s2sh").style.color='rgb(150, 130, 130)';
    document.getElementById("s3sh").style.color='rgb(150, 130, 130)';
    document.getElementById("s1sp").style.color='#fff';
    document.getElementById("s2sp").style.color='rgb(150, 130, 130)';
    document.getElementById("s3sp").style.color='rgb(150, 130, 130)';
}

function display_slide_2(){
    document.getElementById("s1").style.display='none';
    document.getElementById("s2").style.display='block';
    document.getElementById("s3").style.display='none';
    document.getElementById("s2sh").style.color='red';
    document.getElementById("s3sh").style.color='rgb(150, 130, 130)';
    document.getElementById("s1sh").style.color='rgb(150, 130, 130)';
    document.getElementById("s2sp").style.color='#fff';
    document.getElementById("s3sp").style.color='rgb(150, 130, 130)';
    document.getElementById("s1sp").style.color='rgb(150, 130, 130)';
}

function display_slide_3(){
    document.getElementById("s1").style.display='none';
    document.getElementById("s2").style.display='none';
    document.getElementById("s3").style.display='block';
    document.getElementById("s3sh").style.color='red';
    document.getElementById("s2sh").style.color='rgb(150, 130, 130)';
    document.getElementById("s1sh").style.color='rgb(150, 130, 130)';
    document.getElementById("s3sp").style.color='#fff';
    document.getElementById("s2sp").style.color='rgb(150, 130, 130)';
    document.getElementById("s1sp").style.color='rgb(150, 130, 130)';
}

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

