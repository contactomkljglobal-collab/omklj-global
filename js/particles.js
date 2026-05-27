const particlesContainer = document.querySelector(".particles");

for(let i=0;i<80;i++){

const particle = document.createElement("span");

const size = Math.random() * 4 + 2;

particle.style.width = size + "px";
particle.style.height = size + "px";

particle.style.position = "absolute";

particle.style.background =
"rgba(96,165,250,0.4)";

particle.style.borderRadius = "50%";

particle.style.left =
Math.random() * window.innerWidth + "px";

particle.style.top =
Math.random() * window.innerHeight + "px";

particle.style.boxShadow =
"0 0 20px rgba(96,165,250,0.5)";

particle.style.animation =
`particleFloat ${Math.random()*15+10}s linear infinite`;

particlesContainer.appendChild(particle);

}

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

console.log("Particles Loaded");
