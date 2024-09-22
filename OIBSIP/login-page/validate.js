// Validate Login Form
document.querySelector('form').addEventListener('submit', function (event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        event.preventDefault();
        return;
    }

    // Password validation (you can add your own criteria here)
    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        password.focus();
        event.preventDefault();
    }
});

// Validate Registration Form
document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Name validation
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus();
        event.preventDefault();
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        event.preventDefault();
        return;
    }

    // Password validation
    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        password.focus();
        event.preventDefault();
        return;
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.');
        confirmPassword.focus();
        event.preventDefault();
        return;
    }
});
