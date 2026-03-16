function toggleTheme(){ 
document.body.classList.toggle("dark") 
}

/* scroll animation */ 
function reveal(){ 
let reveals=document.querySelectorAll(".reveal") 
for(let i=0;i<reveals.length;i++){ 
let windowHeight=window.innerHeight 
let elementTop=reveals[i].getBoundingClientRect().top 
let elementVisible=120 
if(elementTop < windowHeight - elementVisible){ 
reveals[i].classList.add("active") 
} 
} 
} 
window.addEventListener("scroll",reveal) 


/* hero parallax */ 
window.addEventListener("scroll",function(){ 
let scroll=window.pageYOffset 
let heroBg=document.querySelector(".hero-bg") 
if(heroBg)
	heroBg.style.transform="translateY(" + scroll * 0.3 + "px)" 
})


/* SCROLL PROGRESS INDICATOR */

window.addEventListener("scroll", function(){

let scrollTop = document.documentElement.scrollTop
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

let scrollPercent = (scrollTop / scrollHeight) * 100

document.querySelector(".scroll-bar").style.width = scrollPercent + "%"

})


/* NAVBAR SHRINK */

window.addEventListener("scroll", function(){

let nav=document.querySelector(".navbar")

if(window.scrollY > 50){

nav.style.height="60px"

}else{

nav.style.height="70px"

}

})

/* MOBILE MENU */

const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{

navMenu.classList.toggle("active")

})