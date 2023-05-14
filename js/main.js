let sec = document.getElementById("skills");
let skills = document.querySelectorAll(".skills .skill span");
console.log(sec)
console.log(skills)
// skills.forEach((skill) => {
//   skill.style.display = 'none'
// })
window.addEventListener('scroll', ()=>{
  if (window.scrollY >= sec.offsetTop - 500){
    skills.forEach((e) => {
      e.style.width = `${e.dataset.width}%`
    })
  }
})