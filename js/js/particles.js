const particles = document.querySelector('.particles');

for(let i=0;i<40;i++){

  let particle = document.createElement('span');

  particle.style.position = 'absolute';
  particle.style.width = '8px';
  particle.style.height = '8px';
  particle.style.background = 'rgba(96,165,250,0.4)';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.borderRadius = '50%';

  particle.style.animation = `
    float ${3 + Math.random() * 5}s infinite ease-in-out
  `;

  particles.appendChild(particle);
}
