/* Author: Wai Min Khant */

var i = 0; 
var path = new Array();  //array lis of images to diaplay
 
	path[0] = "images/i01.jpg"; 
	path[1] = "images/i02.jpg"; 
	path[2] = "images/i03.jpg"; 
	path[3] = "images/i04.jpg";
	
			
function changeImage() { 
	document.slide.src = path[i]; //loop and display images from i = 0 to i = 4		
	if (i < path.length - 1) {
		i++;  //If the loop of "i" reach the last element "4", reset i = 0 and continue the loop
	}
	else {
		i = 0;
	} 
	setTimeout("changeImage()",3000); //change img for every 2 sec

} 
window.onload=changeImage;


/* This JS is for clickable drop-down list */

/* When the user clicks on the button, show and hide the dropdown content */
function onClick1() {
    document.getElementById("productDrop").classList.toggle("show");
}

function onClick2() {
    document.getElementById("toDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside the button
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}