// Function to generate a random password
function generatePassword() {
    var length = document.getElementById("length").value;
    var includeNumbers = document.getElementById("numbers").checked;
    var includeLowercase = document.getElementById("lowercase").checked;
    var includeUppercase = document.getElementById("uppercase").checked;
    var includeSymbols = document.getElementById("symbols").checked;

    // Check if any option is selected
    if (!includeNumbers && !includeLowercase && !includeUppercase && !includeSymbols) {
        // Display warning message
        showModal();
        return; // Exit function
    }

    var charset = "";
    if (includeNumbers) charset += "0123456789";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSymbols) charset += "!@#$%^&*()-_=+[{]}|;:,<.>/?";

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Display the generated password
    document.getElementById("password").innerText = password;
}

// Function to download the generated password
function downloadPassword() {
    var password = document.getElementById("password").innerText;
    if (password) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(password));
        element.setAttribute('download', 'generated_password.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    } else {
        showModal();
    }
}

// Function to display the modal
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to enable dark mode
function enableDarkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

// Function to disable dark mode
function disableDarkMode() {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.querySelector('.switch input');

    switchInput.addEventListener('change', function() {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
        switchInput.checked = true;
    }
});

function toggleInfoVisibility() {
    var infoButton = document.getElementById("info-button");
    var infoSection = document.getElementById("info-section");

    // Toggle active class to move the button and reveal the text
    infoButton.classList.toggle("active");
    infoSection.classList.toggle("active");
}