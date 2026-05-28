/* PARTICLE FLOAT */

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
translateX(260px)
scale(1.5);

opacity:0;
}

}

/* TWINKLE */

@keyframes twinkle{

0%{
opacity:0.2;
transform:scale(1);
}

50%{
opacity:1;
transform:scale(1.5);
}

100%{
opacity:0.2;
transform:scale(1);
}

}

/* METEOR */

@keyframes meteorFall{

0%{
transform:
translateX(-400px)
translateY(0px)
rotate(-35deg);

opacity:0;
}

10%{
opacity:1;
}

100%{
transform:
translateX(1800px)
translateY(900px)
rotate(-35deg);

opacity:0;
}

}

/* ORB FLOAT */

@keyframes orbFloat{

0%{
transform:
translate(0px,0px)
scale(1);
}

50%{
transform:
translate(60px,-100px)
scale(1.25);
}

100%{
transform:
translate(0px,0px)
scale(1);
}

}
