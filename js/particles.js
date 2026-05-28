const particlesContainer =
document.querySelector(".particles");

/* MAIN PARTICLES */

for(let i=0;i<140;i++){

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
`rgba(${50 + Math.random()*150},
${120 + Math.random()*100},
255,
${Math.random()})`;

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

/* FLOATING STARS */

for(let i=0;i<80;i++){

const star =
document.createElement("div");

const starSize =
Math.random()*2 + 1;

star.style.position =
"absolute";

star.style.width =
starSize + "px";

star.style.height =
starSize + "px";

star.style.background =
"white";

star.style.borderRadius =
"50%";

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

/* AI GLOW ORBS */

for(let i=0;i<12;i++){

const orb =
document.createElement("div");

const orbSize =
Math.random()*120 + 80;

orb.style.position =
"absolute";

orb.style.width =
orbSize + "px";

orb.style.height =
orbSize + "px";

orb.style.borderRadius =
"50%";

orb.style.filter =
"blur(50px)";

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

/* PARTICLE STYLES */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes particleFloat{

0%{
transform:
translateY(0px)
translateX(0px)
scale(1);

opacity:0;
}

10%{
opacity:1;
}

50%{
opacity:0.8;
}

100%{
transform:
translateY(-1400px)
translateX(250px)
scale(1.4);

opacity:0;
}

}

@keyframes twinkle{

0%{
opacity:0.2;
transform:scale(1);
}

50%{
opacity:1;
transform:scale(1.4);
}

100%{
opacity:0.2;
transform:scale(1);
}

}

@keyframes orbFloat{

0%{
transform:
translate(0px,0px)
scale(1);
}

50%{
transform:
translate(60px,-80px)
scale(1.2);
}

100%{
transform:
translate(0px,0px)
scale(1);
}

}

.particles span{
pointer-events:none;
}

`;

document.head.appendChild(style);

console.log(
"OMKLJ MASTER PARTICLE ENGINE LOADED"
);
