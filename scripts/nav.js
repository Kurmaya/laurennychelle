window.onscroll = function() {scrollFunction()};
const currentLocation=location.href;
const navItem= document.querySelectorAll(".nav-links");
function scrollFunction() {
  if (window.scrollY < window.innerHeight/2.5) {
    document.querySelector("nav").style.background = "transparent";
  } else {
    document.querySelector("nav").style.background = "rgba(20,20,20,1)";
    
  }
}

for(let i=0;i<navItem.length;i++){
  if(navItem[i].querySelector('a').href===currentLocation){
    navItem[i].querySelector('a').classList.add('active');
  }
}