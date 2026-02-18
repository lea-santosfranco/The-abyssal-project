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
