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

const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.fish-card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // On retire la classe active de tous les boutons
        buttons.forEach(btn => btn.classList.remove('active'));
        // On ajoute la classe active au bouton cliqué
        button.classList.add('active');
        
        const filter = button.classList[1]; // Récupère la classe de filtre (epipelagic, mesopelagic, etc.)

        cards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                if (card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
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

// la bulle rétrécit quand on clique
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