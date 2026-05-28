const particlesContainer =
document.querySelector(".particles");

/* MAIN PARTICLES */

for(let i=0;i<160;i++){

const particle =
document.createElement("span");

const size =
Math.random()*4 + 1;

particle.style.width =
size + "px";

particle.style.height =
size + "px";

particle.style.position =
"absolute";

particle.style.borderRadius =
"50%";

particle.style.background =
`rgba(
${80 + Math.random()*120},
${120 + Math.random()*120},
255,
${Math.random()}
)`;

particle.style.left =
Math.random() *
window.innerWidth + "px";

particle.style.top =
Math.random() *
window.innerHeight + "px";

particle.style.boxShadow =
"0 0 20px rgba(96,165,250,0.6)";

particle.style.animation =
`
particleFloat
${Math.random()*20+10}s
linear infinite
`;

particlesContainer
.appendChild(particle);

}

/* STARS */

for(let i=0;i<100;i++){

const star =
document.createElement("div");

const size =
Math.random()*2 + 1;

star.style.position =
"absolute";

star.style.width =
size + "px";

star.style.height =
size + "px";

star.style.borderRadius =
"50%";

star.style.background =
"white";

star.style.left =
Math.random() *
window.innerWidth + "px";

star.style.top =
Math.random() *
window.innerHeight + "px";

star.style.opacity =
Math.random();

star.style.animation =
`
twinkle
${Math.random()*5+3}s
infinite
`;

particlesContainer
.appendChild(star);

}

/* METEORS */

for(let i=0;i<6;i++){

const meteor =
document.createElement("div");

meteor.style.position =
"absolute";

meteor.style.width =
"220px";

meteor.style.height =
"2px";

meteor.style.background =
"linear-gradient(to right,white,transparent)";

meteor.style.transform =
"rotate(-35deg)";

meteor.style.opacity =
"0";

meteor.style.top =
Math.random()*400 + "px";

meteor.style.left =
Math.random()*1200 + "px";

meteor.style.animation =
`
meteorFall
${Math.random()*8+6}s
linear infinite
`;

meteor.style.animationDelay =
Math.random()*10 + "s";

particlesContainer
.appendChild(meteor);

}

/* GLOW ORBS */

for(let i=0;i<12;i++){

const orb =
document.createElement("div");

const size =
Math.random()*160 + 80;

orb.style.position =
"absolute";

orb.style.width =
size + "px";

orb.style.height =
size + "px";

orb.style.borderRadius =
"50%";

orb.style.filter =
"blur(60px)";

orb.style.opacity =
"0.12";

orb.style.background =
`
linear-gradient(
45deg,
#2563eb,
#06b6d4,
#7c3aed
)
`;

orb.style.left =
Math.random() *
window.innerWidth + "px";

orb.style.top =
Math.random() *
window.innerHeight + "px";

orb.style.animation =
`
orbFloat
${Math.random()*20+20}s
ease-in-out infinite
`;

particlesContainer
.appendChild(orb);

}

/* NETWORK DOTS */

for(let i=0;i<25;i++){

const dot =
document.createElement("div");

dot.style.position =
"absolute";

dot.style.width =
"6px";

dot.style.height =
"6px";

dot.style.borderRadius =
"50%";

dot.style.background =
"#60a5fa";

dot.style.boxShadow =
"0 0 20px #60a5fa";

dot.style.left =
Math.random() *
window.innerWidth + "px";

dot.style.top =
Math.random() *
window.innerHeight + "px";

dot.style.animation =
`
networkPulse
${Math.random()*4+2}s
infinite
`;

particlesContainer
.appendChild(dot);

}

console.log(
"OMKLJ ULTIMATE PARTICLE ENGINE LOADED"
);
