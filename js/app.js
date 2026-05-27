const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background = "rgba(2,6,23,0.85)";
navbar.style.backdropFilter = "blur(20px)";

}else{

navbar.style.background = "rgba(0,0,0,0.2)";

}

});

/* BUTTON HOVER EFFECT */

const buttons = document.querySelectorAll("button");

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform = "translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "translateY(0px) scale(1)";

});

});

/* PARALLAX GLOW */

window.addEventListener("mousemove",(e)=>{

const glow1 = document.query
