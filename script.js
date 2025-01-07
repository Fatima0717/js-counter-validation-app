let counter = 0;

const counterElement = document.getElementById('counter');
const increaseButton = document.getElementById('increaseBtn');

increaseButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});
