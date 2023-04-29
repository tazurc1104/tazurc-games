const phoneNav = document.querySelector(".phone-nav-links");
var opened = false;



function myFunction(x) {
    
    
    if (opened === true){
      phoneNav.style.opacity = 0;
      x.classList.toggle("change");
      opened = false;
    }
    else {
      x.classList.toggle("change");
      phoneNav.style.opacity = 1;
      opened = true;
    }
  }