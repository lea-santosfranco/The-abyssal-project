// Barre de progression
window.onscroll = function() { depthProgressBar() };

function depthProgressBar() {
  const depthIndicator = document.getElementById("depthCounter");
  let scubaDiverImg = document.createElement("img");
  scubaDiverImg.src= "ima"
  // Calcul de la distance parcourue par l'utilisateur
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  // Calcul de la hauteur totale scrollable (Hauteur totale - Hauteur de la fenêtre)
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // Calcul du pourcentage
  const scrolled = (winScroll / height) * 100;
  
  // Mise à jour de la largeur de la barre et du texte
  const progressText = document.getElementById("progress-text");
  progressText.innerText = Math.round(scrolled) + "%";
  const depthText = document.getElementById("depthCounter");
  depthText.innerText = `${Math.round(scrolled)}m under the sea`
    // while (Math.round(scrolled)>20){
    //     depthIndicator.style.display = 'block';
    // }

}

    // Obtention de la position:
// const positionFirstZone = document.getElementById('firstZone');
// const firstRect = positionFirstZone.getBoundingClientRect();
// const yFirstZone = firstRect.top + window.scrollY;
// console.log(" Y = " + yFirstZone)

// const positionSecondZone = document.getElementById('secondZone');
// const secondRect = positionSecondZone.getBoundingClientRect();
// const ySecondZone = secondRect.top + window.scrollY;
// console.log(" Y = " + ySecondZone)

// const positionThirdZone = document.getElementById('thirdZone');
// const thirdRect = positionThirdZone.getBoundingClientRect();
// const yThirdZone = thirdRect.top + window.scrollY;
// console.log(" Y = " + yThirdZone)

// const positionFourthZone = document.getElementById('fourthZone');
// const fourthRect = positionFourthZone.getBoundingClientRect();
// const yFourthZone = fourthRect.top + window.scrollY;
// console.log(" Y = " + yFourthZone)

const positionFifthZone = document.getElementById('fifthZone');
const fifthRect = positionFifthZone.getBoundingClientRect();
const yFifthZone = fifthRect.top + window.scrollY;
console.log(" Y = " + yFifthZone)
const yFifthZoneBottom = fifthRect.bottom + window.scrollY;
console.log(" Y = " + yFifthZoneBottom)

//----------------------- Début Bubule
function createBubble() {
    const bubble = document.createElement('div');
    
    //On lui donne une classe pour le css
    bubble.className = 'bubble';
    
    // Taille aléatoire entre 5px et 15px
    const size = Math.floor(Math.random() * 10 + 5) + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    
    // Position de départ
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.bottom = '-20px';

    document.body.appendChild(bubble);
    
    // Animation de remontée
    const duration = Math.random() * 3000 + 5000;
    const drift = (Math.random() - 0.5) * 100; // Oscillation gauche/droite
    
    const animation = bubble.animate([
        { transform: 'translateY(0) translateX(0)', opacity: 0 },
        { transform: `translateY(-50vh) translateX(${drift}px)`, opacity: 0.6, offset: 0.5 },
        { transform: `translateY(-105vh) translateX(${drift * 2}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-in'
    });
    
    animation.onfinish = () => bubble.remove();
}

// On lance les bulles dès que la page est prête
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createBubble, 300);
});

//------------ Fin Bubule 

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
