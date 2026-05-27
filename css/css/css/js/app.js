window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
header.style.background="rgba(0,0,0,0.8)";
header.style.backdropFilter="blur(14px)";
}
else{
header.style.background="rgba(0,0,0,0.4)";
}

});

const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

for(let i=0;i<reveal.length;i++){

const windowHeight=window.innerHeight;
const revealTop=reveal[i].getBoundingClientRect().top;
const revealPoint=100;

if(revealTop < windowHeight - revealPoint){
reveal[i].classList.add("active");
}

}

});
