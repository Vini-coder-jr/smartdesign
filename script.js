const textElement = document.getElementById('typing-text');
const texts = ["W£LCOM£ . . .", "HOM£ OF D£SIGN£R", "HOM£ OF T£CHNOLOGY"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
        textElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 10000); // Pause before deleting
        } else {
            setTimeout(type, 100); // Typing speed
        }
    } else {
        textElement.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            setTimeout(type, 500); // Pause before typing next text
        } else {
            setTimeout(type, 50); // Deleting speed
        }
    }
}

type(); // Start the typing animation

