// Barre de progression
window.onscroll = function () {
  depthProgressBar();
};

function depthProgressBar() {
  const depthIndicator = document.getElementById("depthCounter");
//   const depthPerZone = document.getElementsByClassName("depthZones");
  
  // Calcul de la distance parcourue par l'utilisateur
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Calcul de la hauteur totale scrollable (Hauteur totale - Hauteur de la fenêtre)
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calcul du pourcentage
  const scrolled = (winScroll / height) * 100;

  // Mise à jour du texte
  const depthText = document.getElementById("depthCounter");
  depthText.innerText = `${Math.round(scrolled)}m under the sea`;
//   depthPerZone.innerText = `Blablabla`;

}

//----------------------- Début Bubule ---------------------------------------------------------------
function createBubble() {
  const bubble = document.createElement("div");

  //On lui donne une classe pour le css
  bubble.className = "bubble";

  // Taille aléatoire entre 5px et 15px
  const size = Math.floor(Math.random() * 10 + 5) + "px";
  bubble.style.width = size;
  bubble.style.height = size;

  // Position de départ
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.bottom = "-20px";

  document.body.appendChild(bubble);

  // Animation de remontée
  const duration = Math.random() * 3000 + 5000;
  const drift = (Math.random() - 0.5) * 100; // Oscillation gauche/droite

  const animation = bubble.animate(
    [
      { transform: "translateY(0) translateX(0)", opacity: 0 },
      {
        transform: `translateY(-50vh) translateX(${drift}px)`,
        opacity: 0.6,
        offset: 0.5,
      },
      {
        transform: `translateY(-105vh) translateX(${drift * 2}px)`,
        opacity: 0,
      },
    ],
    {
      duration: duration,
      easing: "ease-in",
    },
  );

  animation.onfinish = () => bubble.remove();
}

// On lance les bulles dès que la page est prête
document.addEventListener("DOMContentLoaded", () => {
  setInterval(createBubble, 300);
});

//------------ Fin Bubule
