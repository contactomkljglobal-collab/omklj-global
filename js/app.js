const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left = e.clientX - 175 + "px";

cursorGlow.style.top = e.clientY - 175 + "px";

});

/* PRELOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".preloader").style.display="none";

},5000);

});

/* PARALLAX */

window.addEventListener("scroll",()=>{

const scrollY = window.scrollY;

document.querySelector(".orb1").style.transform =
`translateY(${scrollY * 0.2}px)`;

document.querySelector(".orb2").style.transform =
`translateY(${scrollY * -0.2}px)`;

document.querySelector(".orb3").style.transform =
`translate(-50%,-50%) translateY(${scrollY * 0.1}px)`;

});

/* NAVBAR BLUR */

window.addEventListener("scroll",()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "rgba(2,6,23,0.8)";
navbar.style.backdropFilter = "blur(20px)";

}else{

navbar.style.background = "rgba(255,255,255,0.04)";

}

});

/* RANDOM GLOW */

setInterval(()=>{

document
