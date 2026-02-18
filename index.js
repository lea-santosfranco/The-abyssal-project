// Toggle light in Bioluminescence page
const spotlight = document.querySelectorAll(".hidden-content");
function toggleLight() {
  spotlight.forEach((i) => i.classList.toggle("opacity-light"));
}

// Bioluminescence creatures animation
// weird creature animation
document
  .getElementById("weird-creature")
  .animate(
    [
      { transform: "translate(0)" },
      { transform: "translate(20%, 30%)" },
      { transform: "translate(0)" },
    ],
    {
      duration: 4000,
      iterations: Infinity,
    },
  );
// medusa animation
document
  .getElementById("aequorea")
  .animate(
    [
      { transform: "translate(0)" },
      { transform: "translate(-10%, 10%)" },
      { transform: "translate(-5%, -10%)" },
      { transform: "translate(0)" },
    ],
    {
      duration: 9000,
      iterations: Infinity,
    },
  );
// octopus animation
document
  .getElementById("glass-octopus")
  .animate(
    [
      { transform: "translate(0)" },
      { transform: "translate(10%, -10%)" },
      { transform: "translate(40%, 0)" },
      { transform: "translate(0)" },
    ],
    {
      duration: 6000,
      iterations: Infinity,
    },
  );
// siphonophore animation
document
  .getElementById("siphonophore")
  .animate(
    [
      { transform: "rotate(0)" },
      { transform: "rotate(30deg)" },
      { transform: "rotate(-60deg)" },
      { transform: "rotate(0)" },
    ],
    {
      duration: 20000,
      iterations: Infinity,
    },
  );
