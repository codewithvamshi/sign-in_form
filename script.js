// script.js
function validatePassword() {
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('password-error');

    // Reset error message
    errorElement.textContent = '';

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        errorElement.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (password.length > 12) {
        errorElement.textContent = 'Password must be not more than 12 characters';
        return;
    }
    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one lowercase letter.';
        return;
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one uppercase letter.';
        return;
    }

    // Check if the password contains at least one digit
    if (!/\d/.test(password)) {
        errorElement.textContent = 'Password must contain at least one digit.';
        return;
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one special character (!@#$%^&*()_+).';
        return;
    }
}


