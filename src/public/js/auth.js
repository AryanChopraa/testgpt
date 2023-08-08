```javascript
// src/public/js/auth.js

document.getElementById('login-form').addEventListener('submit', loginUser);
document.getElementById('register-form').addEventListener('submit', registerUser);

async function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    let response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        let result = await response.json();
        localStorage.setItem('token', result.token);
        window.location.href = '/profile.html';
    } else {
        alert('Login failed');
    }
}

async function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById('register-name').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;

    let response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
        let result = await response.json();
        localStorage.setItem('token', result.token);
        window.location.href = '/profile.html';
    } else {
        alert('Registration failed');
    }
}
```