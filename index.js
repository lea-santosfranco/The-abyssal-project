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