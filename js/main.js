let sec = document.getElementById("skills");
let skills = document.querySelectorAll(".skills .skill span");
console.log(sec)
console.log(skills)
window.onscroll = function(){
  if (window.scrollY >= sec.offsetTop - 500){
    skills.forEach(function(e){
      e.style.width = 100%
    })
  }
}