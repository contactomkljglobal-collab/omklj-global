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

document.querySelectorAll(".network-dot").forEach(dot=>{

dot.style.boxShadow =
`0 0 ${Math.random()*40}px #60a5fa`;

});

},1000);

/* FLOATING TAGS */

const tags = document.querySelectorAll(".tag");

tags.forEach((tag,index)=>{

tag.style.animationDelay = `${index}s`;

});

/* HERO ROCKET MOTION */

const rocket = document.querySelector(".hero-rocket");

window.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth / 2 - e.pageX) / 40;
const y = (window.innerHeight / 2 - e.pageY) / 40;

rocket.style.transform =
`translate(${x}px, ${y}px)`;

});

/* BUTTON RIPPLE */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow =
"0 0 50px rgba(96,165,250,0.7)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow =
"0 0 20px rgba(96,165,250,0.3)";

});

});

console.log("OMKLJ Global Premium System Loaded");
