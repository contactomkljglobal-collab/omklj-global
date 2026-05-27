const particlesContainer=document.createElement("div");

particlesContainer.style.position="fixed";
particlesContainer.style.top="0";
particlesContainer.style.left="0";
particlesContainer.style.width="100%";
particlesContainer.style.height="100%";
particlesContainer.style.pointerEvents="none";
particlesContainer.style.zIndex="-1";

document.body.appendChild(particlesContainer);

for(let i=0;i<60;i++){

const particle=document.createElement("span");

particle.style.position="absolute";
particle.style.width=Math.random()*6+2+"px";
particle.style.height=particle.style.width;

particle.style.background="rgba(96,165,250,0.4)";
particle.style.borderRadius="50%";

particle.style.left=Math.random()*100+"%";
particle.style.top=Math.random()*100+"%";

particle.style.animation=`floatParticle ${Math.random()*10+10}s linear infinite`;

particlesContainer.appendChild(particle);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatParticle{

0%{
transform:translateY(0px) translateX(0px);
opacity:0;
}

50%{
opacity:1;
}

100%{
transform:translateY(-1000px) translateX(200px);
opacity:0;
}

}

`;

document.head.appendChild(style);
