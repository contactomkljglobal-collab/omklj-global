const particlesContainer = document.querySelector(".particles");

for(let i=0;i<120;i++){

const particle = document.createElement("span");

const size = Math.random() * 6 + 2;

particle.style.width = size + "px";
particle.style.height = size + "px";

particle.style.position = "absolute";

particle.style.background =
"rgba(96,165,250,0.35)";

particle.style.borderRadius = "50%";

particle.style.left =
Math.random() * window.innerWidth + "px";

particle.style.top =
Math.random() * window.innerHeight + "px";

particle.style.boxShadow =
"0 0 20px rgba(96,165,250,0.5)";

particle.style.animation =
`particleFloat ${Math.random()*20+10}s linear infinite`;

particlesContainer.appendChild(particle);

}

/* PARTICLE STYLE */

const style = document.createElement("style");

style.innerHTML = `

@keyframes particleFloat{

0%{
transform:
translateY(0px)
translateX(0px);
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
translateY(-1200px)
translateX(250px);
opacity:0;
}

}

.particles span{
pointer-events:none;
}

`;

document.head.appendChild(style);

/* STARS */

for(let i=0;i<80;i++){

const star = document.createElement("div");

star.style.position = "absolute";

const starSize = Math.random()*2 + 1;

star.style.width = starSize + "px";
star.style.height = starSize + "px";

star.style.background = "white";

star.style.borderRadius = "50%";

star.style.left =
Math.random() * window.innerWidth + "px";

star.style.top =
Math.random() * window.innerHeight + "px";

star.style.opacity = Math.random();

star.style.animation =
`twinkle ${Math.random()*5+3}s infinite`;

particlesContainer.appendChild(star);

}

const starStyle = document.createElement("style");

starStyle.innerHTML = `

@keyframes twinkle{

0%{
opacity:0.2;
}

50%{
opacity:1;
}

100%{
opacity:0.2;
}

}

`;

document.head.appendChild(starStyle);

console.log("Particles Engine Loaded");
