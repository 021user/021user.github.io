// Sélectionne l'élément <span> à l'intérieur de la balise <h1>
const dynamicText = document.querySelector("h1 span");

// Tableau de mots à afficher dans l'effet machine à écrire
const words = ["Java", "Javascript", "Python", "C", "C++"];

let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

const typeEffect = () => {
    // Récupère le mot actuel à afficher
    const currentWord = words[wordIndex];

    // Construit le sous-ensemble du mot en fonction du caractère actuel
    const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

    // Modifie le texte dans la balise <h1> avec le sous-ensemble actuel
    dynamicText.textContent = currentChar;

    // Met à jour les indices et l'état en fonction de la progression
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        // Change l'état de suppression et passe au mot suivant
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    }

    // Détermine la vitesse d'écriture ou de suppression
    const speed = isDeleting ? 100 : 200; 

    // Planifie la prochaine itération de la fonction après le délai spécifié
    setTimeout(typeEffect, speed);
}

// Démarre l'effet machine à écrire
typeEffect();
