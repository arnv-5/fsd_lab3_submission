document.getElementById('registrationForm').addEventListener('submit', function (e) {
    // Reset error messages
    clearErrors();

    // Get form inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validation checks
    if (isEmpty(username)) {
        showError('usernameError', 'Username is required.');
        e.preventDefault();
    }

    if (!isValidEmail(email)) {
        showError('emailError', 'Invalid email address.');
        e.preventDefault();
    }

    if (!isValidPhoneNumber(phone)) {
        showError('phoneError', 'Invalid phone number (10 digits expected).');
        e.preventDefault();
    }

    if (!isValidPassword(password)) {
        showError('passwordError', 'Invalid password (at least 7 characters with one capital letter, one digit, and one special character).');
        e.preventDefault();
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        e.preventDefault();
    }
});

function isEmpty(value) {
    return /^\s*$/.test(value);
}

function isValidEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function isValidPhoneNumber(phone) {
    return /^\d{10}$/.test(phone);
}

function isValidPassword(password) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$#&]).{7,}$/.test(password);
}

function showError(elementId, errorMessage) {
    document.getElementById(elementId).textContent = errorMessage;
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error-message');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}