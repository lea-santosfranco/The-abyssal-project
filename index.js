// Toggle light in Bioluminescence page
const spotlight = document.querySelectorAll(".hidden-content");
function toggleLight() {
  spotlight.forEach((i) => i.classList.toggle("opacity-light"));
}
