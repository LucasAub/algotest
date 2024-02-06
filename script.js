// Get references to the elements to be animated
const lucasName = document.querySelector('#lucas');
const remyName = document.querySelector('#remy');

// Function to add shake animation
function addShakeAnimation(element) {
    element.classList.add('shake');
}

// Add shake animation to Lucas and Rémy's names
addShakeAnimation(lucasName);
addShakeAnimation(remyName);
