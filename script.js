// THIS IS FOR THE DREW HOMEPAGE



// Animation for Loki
const lokiImg = document.getElementById('animated-loki');
const frames = [
    'game/hero/3.png',
    'game/hero/4.png',
    'game/hero/5.png',
    'game/hero/6.png'
];
let currentFrame = 0;

function animateLoki() {
    currentFrame = (currentFrame + 1) % frames.length;
    lokiImg.src = frames[currentFrame];
}

setInterval(animateLoki, 150); // Adjust speed as needed

// Title typing effect
const titles = [
    "Loki",
    "Mischief!",
    "Made by Veer, Drew, John, and Alexander"
];

const typingSpeed = 120;   // ms per character
const deletingSpeed = 80;
const pauseAfterType = 1000;
const pauseAfterDelete = 400;

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTitle() {
    const current = titles[titleIndex];

    if (!isDeleting) {
        // Typing
        charIndex++;
        document.title = current.slice(0, charIndex);

        if (charIndex === current.length) {
            setTimeout(() => (isDeleting = true), pauseAfterType);
        }
    } else {
        // Deleting
        charIndex--;
        document.title = current.slice(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            // Small pause before starting next title
            setTimeout(() => { }, pauseAfterDelete);
        }
    }

    setTimeout(typeTitle, isDeleting ? deletingSpeed : typingSpeed);
}

typeTitle();


