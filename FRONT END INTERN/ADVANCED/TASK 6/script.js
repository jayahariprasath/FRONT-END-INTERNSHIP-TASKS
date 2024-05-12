const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const mobileInput = document.getElementById('mobile');
const aadhaarInput = document.getElementById('aadhaar');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const mobileError = document.getElementById('mobileError');
const aadhaarError = document.getElementById('aadhaarError');
const validationMessage = document.getElementById('validationMessage'); // Adding validation message element

form.addEventListener('submit', function(event) {
    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    mobileError.textContent = '';
    aadhaarError.textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const aadhaarRegex = /^\d{12}$/;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
    }

    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }

    if (!mobileRegex.test(mobileInput.value.trim())) {
        mobileError.textContent = 'Enter a valid 10-digit mobile number';
        isValid = false;
    }

    if (!aadhaarRegex.test(aadhaarInput.value.trim())) {
        aadhaarError.textContent = 'Enter a valid 12-digit Aadhaar number';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        validationMessage.textContent = 'Form validated successfully!'; // Show validation message
    }
    
});
