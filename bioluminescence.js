// Toggle light in Bioluminescence page
const spotlight = document.getElementById("hidden-content");
function toggleLight() {
  spotlight.classList.toggle("opacity-light");
}

// Bioluminescence creatures animations :
// -> weird creature animation
document
  .getElementById("weird-creature")
  .animate(
    [
      { transform: "translate(0) scale(1)" },
      { transform: "translate(20%, 30%) scale(0.9)" },
      { transform: "translate(0) scale(1)" },
    ],
    {
      duration: 5000,
      iterations: Infinity,
    },
  );
// -> medusa animation
document
  .getElementById("aequorea")
  .animate(
    [
      { transform: "translate(0) scale(1)" },
      { transform: "translate(-10%, 10%) scale(1.1)" },
      { transform: "translate(-5%, -10%) scale(1.15)" },
      { transform: "translate(0) scale(1)" },
    ],
    {
      duration: 9000,
      iterations: Infinity,
    },
  );
// -> octopus animation
document
  .getElementById("glass-octopus")
  .animate(
    [
      { transform: "translate(0) scale(1)" },
      { transform: "translate(10%, -10%) scale(1.1)" },
      { transform: "translate(40%, 0) scale(1.2)" },
      { transform: "translate(0) scale(1)" },
    ],
    {
      duration: 7000,
      iterations: Infinity,
    },
  );
// -> siphonophore animation
document
  .getElementById("siphonophore")
  .animate(
    [
      { transform: "rotate(0) scale(1)" },
      { transform: "rotate(30deg) scale(1.1)" },
      { transform: "rotate(-60deg) scale(1.2)" },
      { transform: "rotate(0) scale(1)" },
    ],
    {
      duration: 20000,
      iterations: Infinity,
    },
  );

// Particles on Bioluminescence page
function createParticle() {
  // create particle
  const particle = document.createElement("div");
  particle.className = "particle";
  // random size at creation
  let pSize = Math.ceil(Math.random() * 3) + "px";
  particle.style.width = pSize;
  particle.style.height = pSize;
  // random position
  particle.style.top = Math.random() * 100 + "vh";
  particle.style.left = Math.random() * 100 + "vw";
  // particle direct child of body
  document.body.appendChild(particle);
  // particle animation
  let pDuration = Math.random() * 5000 + 7000;
  let pDirection = Math.random() > 0.5 ? "+" : "-";
  const pAnimaton = particle.animate(
    [
      { transform: "translateX(0)", opacity: 0 },
      { transform: `translateX(${pDirection}20px)`, opacity: 0.75 },
      { transform: `translateX(${pDirection}40px)`, opacity: 0 },
    ],
    {
      duration: pDuration,
    },
  );
  // remove particle once animation finish
  pAnimaton.onfinish = () => particle.remove();
}
// Loop particle creation
document.addEventListener("DOMContentLoaded", () => {
  setInterval(createParticle, 200);
});

const bubble = document.querySelector('.cursor-bubble');

document.addEventListener('mousemove', (e) => {
    // Récupère les coordonnées X et Y de la souris
    const x = e.clientX;
    const y = e.clientY;

    // Déplace la bulle
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
});

//la bulle rétrécit quand on clique
document.addEventListener('mousedown', () => {
    bubble.style.width = '15px';
    bubble.style.height = '15px';
    bubble.style.background = 'rgba(255, 255, 255, 0.5)';
});

document.addEventListener('mouseup', () => {
    bubble.style.width = '20px';
    bubble.style.height = '20px';
    bubble.style.background = 'rgba(255, 255, 255, 0.2)';
});