

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 ) {
    document.getElementById("nav-bar").style.display = "inline-block";
   
  
  }   else {
    document.getElementById("nav-bar").style.display = "none ";
    
  }
}