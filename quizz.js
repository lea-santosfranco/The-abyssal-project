const questions = [
  {
    question:
      "What is the maximum depth of the Epipelagic Zone, where sunlight still allows photosynthesis?",
    answer: [
      { text: "500 meters", correct: true }, // Correct answer
      { text: "1000 meters", correct: false },
      { text: "100 meters", correct: false },
      { text: "200 meters", correct: false },
    ],
  },
  {
    question:
      "What is the term for the biological chemical reaction that allows deep-sea creatures to produce their own light?",
    answer: [
      { text: "Fluorescence", correct: false },
      { text: "Incandescence", correct: false },
      { text: "Bioluminescence", correct: true }, // Correct answer
      { text: "Phosphorescence", correct: false },
    ],
  },
  {
    question:
      "Which zone contains the 'Abyssal Plains', covering about 50% of the Earth's surface?",
    answer: [
      { text: "Abyssopelagic Zone", correct: true }, // Correct answer
      { text: "Bathypelagic Zone", correct: false },
      { text: "Hadalpelagic Zone", correct: false },
      { text: "Mesopelagic Zone", correct: false },
    ],
  },
  {
    question:
      "Approximately how deep is the 'Challenger Deep', the lowest point in the Mariana Trench?",
    answer: [
      { text: "10,984 meters", correct: true }, // Correct answer
      { text: "20,000 meters", correct: false },
      { text: "15,000 meters", correct: false },
      { text: "8,848 meters", correct: false },
    ],
  },
  {
    question:
      "What do scientists call the organic debris that falls from the surface to feed the deep-sea floor?",
    answer: [
      { text: "Abyssal Rain", correct: false },
      { text: "Marine Frog", correct: false },
      { text: "Pelagic Silt", correct: false },
      { text: "Marine Snow", correct: true }, // Correct answer
    ],
  },
  {
    question:
      "How do deep-sea fish survive the immense pressure of the deep ocean?",
    answer: [
      { text: "Ultra-powerful muscles", correct: false },
      { text: "Lack of gas-filled cavities", correct: true }, // Correct answer
      { text: "Extremely thick skin", correct: false },
      { text: "Metal-like shells", correct: false },
    ],
  },
  {
    question:
      " The Fangtooth fish (Anoplogaster cornuta) holds a record for which physical feature relative to its size?",
    answer: [
      { text: "Largest stomach", correct: false },
      { text: "Largest teeth", correct: true }, // Correct answer
      { text: "Fastest swimmer", correct: false },
      { text: "Largest eyes", correct: false },
    ],
  },
  {
    question:
      "What is the average temperature of the water in the Abyssopelagic zone?",
    answer: [
      { text: "Around 15°C", correct: false },
      { text: "-10°C", correct: false },
      { text: "between 0°C and 3°C", correct: true }, // Correct answer
      { text: "400°C everywhere", correct: false },
    ],
  },
  {
    question:
      "Which real deep-sea creature likely inspired the legend of the 'Kraken'?",
    answer: [
      { text: "Blue Whale", correct: false },
      { text: "Whale Shark", correct: false },
      { text: "Oarfish", correct: false },
      { text: "Giant Squid", correct: true }, // Correct answer
    ],
  },
  {
    question:
      "At 10,000 meters, the pressure is about 1,000 bars. What does this feel like?",
    answer: [
      { text: "One ton per cm²", correct: true }, // Correct answer
      { text: "a sheet of paper", correct: false },
      { text: "1g per cm²", correct: false },
      { text: "a bycle tire", correct: false },
    ],
  },
  {
    question:
      "At 10,000 meters, the pressure is about 1,000 bars. What does this feel like?",
    answer: [
      { text: "One ton per cm²", correct: true }, // Correct answer
      { text: "a sheet of paper", correct: false },
      { text: "1g per cm²", correct: false },
      { text: "a bycle tire", correct: false },
    ],
  },
];

const questionTitle = document.getElementById("question-title");
const firstAnswer = document.getElementById("first-answer");
const secondAnswer = document.getElementById("second-answer");
const thirdAnswer = document.getElementById("third-answer");
const fourthAnswer = document.getElementById("fourth-answer");

// set counters
let questionNum = 1;
let questionIndex = 0;
let playerScore = 0;

// display first question
questionTitle.innerText = `Question ${questionNum} : ${questions[questionIndex].question}`;
firstAnswer.innerText = questions[questionIndex].answer[0].text;
secondAnswer.innerText = questions[questionIndex].answer[1].text;
thirdAnswer.innerText = questions[questionIndex].answer[2].text;
fourthAnswer.innerText = questions[questionIndex].answer[3].text;

function nextQuestion(aI) {
  if (questions[questionIndex].answer[aI].correct) {
    playerScore++;
  }
  console.log("Score : " + playerScore);

  questionNum += 1;
  questionIndex += 1;
  questionTitle.innerText = `Question ${questionNum} : ${questions[questionIndex].question}`;
  firstAnswer.innerText = questions[questionIndex].answer[0].text;
  secondAnswer.innerText = questions[questionIndex].answer[1].text;
  thirdAnswer.innerText = questions[questionIndex].answer[2].text;
  fourthAnswer.innerText = questions[questionIndex].answer[3].text;

  if (questionIndex === questions.length - 1) {
    questionTitle.innerText = `Quiz terminé ! Votre score : ${playerScore} / ${questions.length - 1}`;
    firstAnswer.style.display = "none";
    secondAnswer.style.display = "none";
    thirdAnswer.style.display = "none";
    fourthAnswer.style.display = "none";
  }
}

//----------------------- Début Bubule
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

const bubble = document.querySelector(".cursor-bubble");

document.addEventListener("mousemove", (e) => {
  // Récupère les coordonnées X et Y de la souris
  const x = e.clientX;
  const y = e.clientY;

  // Déplace la bulle
  bubble.style.left = x + "px";
  bubble.style.top = y + "px";
});

// la bulle rétrécit quand on clique
document.addEventListener("mousedown", () => {
  bubble.style.width = "15px";
  bubble.style.height = "15px";
  bubble.style.background = "rgba(255, 255, 255, 0.5)";
});

document.addEventListener("mouseup", () => {
  bubble.style.width = "20px";
  bubble.style.height = "20px";
  bubble.style.background = "rgba(255, 255, 255, 0.2)";
});
