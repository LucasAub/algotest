// Get references to the elements to be animated
const lucasName = document.querySelector('#lucas');
const remyName = document.querySelector('#remy');
const alertButton = document.querySelector('#alertButton');
const container = document.querySelector('.container');

// Function to add shake animation
function addShakeAnimation(element) {
    element.classList.add('shake');
}

// Function to change color
function changeColor(element) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

// Function to create explosion effect
function createExplosion() {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    container.appendChild(explosion);
    setTimeout(() => {
        explosion.remove();
    }, 1000);
}

// Add shake animation to Lucas and Rémy's names
addShakeAnimation(lucasName);
addShakeAnimation(remyName);

// Add event listeners to change color on click
lucasName.addEventListener('click', function() {
    changeColor(this);
});

remyName.addEventListener('click', function() {
    changeColor(this);
});
