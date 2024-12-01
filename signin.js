document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validate credentials
    if (username === 'farhan' && password === '123') {
        window.location.href = 'main.html'; // Redirect to main.html
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
