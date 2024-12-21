document.addEventListener("DOMContentLoaded", () => {
    const noteCard = document.querySelector('.note-card');
    const heart = document.querySelector('.heart');

    // Ajout d'animation dynamique si nécessaire (exemple d'événements futurs)
    setTimeout(() => {
        heart.style.animation = "draw-heart 2s ease-out forwards";
    }, 2000);
});
