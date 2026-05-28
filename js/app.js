const navbar = document.querySelector(".navbar");

/* NAVBAR */

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(2,6,23,0.85)";

navbar.style.backdropFilter =
"blur(20px)";

}else{

navbar.style.background =
"rgba(2,6,23,0.4)";

}

});

/* CURSOR GLOW */

const cursorGlow =
document.querySelector(".cursor-glow");

const spotlight =
document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

const x = e.clientX;
const y = e.clientY;

cursorGlow.style.left = x + "px";
cursorGlow.style.top = y + "px";

spotlight.style.left = x + "px";
spotlight.style.top = y + "px";

});

/* AURORA PARALLAX */

document.addEventListener("mousemove",(e)=>{

const aurora1 =
document.querySelector(".aurora1");

const aurora2 =
document.querySelector(".aurora2");

const aurora3 =
document.querySelector(".aurora3");

let x =
e.clientX / window.innerWidth;

let y =
e.clientY / window.innerHeight;

aurora1.style.transform =
`translate(${x*40}px,${y*40}px)`;

aurora2.style.transform =
`translate(-${x*30}px,-${y*30}px)`;

aurora3.style.transform =
`translate(${x*20}px,-${y*20}px)`;

});

/* BUTTON EFFECTS */

const buttons =
document.querySelectorAll("button");

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0px) scale(1)";

});

});

/* 3D CARD EFFECT */

const cards =
document.querySelectorAll(
".service-card,.stat-card,.dashboard-card"
);

cards.forEach((card)=>{

card.addEventListener(
"mousemove",(e)=>{
