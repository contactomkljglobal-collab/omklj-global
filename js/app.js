/* =========================
   PARTICLES
========================= */

const particlesContainer =
document.querySelector(".particles");

for(let i=0;i<40;i++){

const particle =
document.createElement("span");

particle.style.left =
Math.random()*100 + "%";

particle.style.top =
Math.random()*100 + "%";

particle.style.animationDelay =
Math.random()*10 + "s";

particle.style.animationDuration =
Math.random()*10 + 10 + "s";

particlesContainer.appendChild(particle);

}

/* =========================
   NAVBAR SCROLL
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(4,8,20,0.85)";

}else{

navbar.style.background =
"rgba(4,8,20,0.55)";

}

});

/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
document.querySelectorAll(
".stat-card,.service-card"
);

function reveal(){

const trigger =
window.innerHeight * 0.85;

revealItems.forEach((item)=>{

const top =
item.getBoundingClientRect().top;

if(top < trigger){

item.style.opacity = "1";

item.style.transform =
"translateY(0px)";

}

});

}

revealItems.forEach((item)=>{

item.style.opacity = "0";

item.style.transform =
"translateY(50px)";

item.style.transition =
"0.8s ease";

});

window.addEventListener(
"scroll",
reveal
);

reveal();

/* =========================
   BUTTON EFFECT
========================= */

const buttons =
document.querySelectorAll(
".primary-btn,.secondary-btn"
);

buttons.forEach((btn)=>{

btn.addEventListener(
"mouseenter",()=>{

btn.style.transform =
"translateY(-4px)";

});

btn.addEventListener(
"mouseleave",()=>{

btn.style.transform =
"translateY(0px)";

});

});

/* =========================
   PERFORMANCE
========================= */

window.addEventListener(
"resize",()=>{

document.body.style.overflowX =
"hidden";

});

console.log(
"OMKLJ GLOBAL SYSTEM READY 🚀"
);
