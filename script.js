const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()-_+=';

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = '';

    if (!includeNumbers && !includeLowercase && !includeUppercase && !includeSymbols) {
        displayModal();
        return;
    }

    if (includeNumbers) charset += numberChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeUppercase) charset += uppercaseChars;
    if (includeSymbols) charset += specialChars;

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').textContent = password;
}

function downloadPassword() {
    const password = document.getElementById('password').textContent;
    if (!password) {
        displayModal();
        return;
    }
    const blob = new Blob([password], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'password.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

function displayModal() {
    modal.style.display = "block";
}

// Modal close functionality
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}