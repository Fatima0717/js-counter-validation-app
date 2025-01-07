const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const messageElement = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();

    if (name === '') {
        messageElement.textContent = 'Please enter your name.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Form has been submitted!';
        messageElement.style.color = 'green';
    }
});
