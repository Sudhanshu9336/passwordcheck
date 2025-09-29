// Toggle Show/Hide Password
document.getElementById('togglePassword').addEventListener('change', function () {
  const passwordField = document.getElementById('password');
  passwordField.type = this.checked ? 'text' : 'password';
});

// Password Strength Checker Logic
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

// Tips
const lengthTip = document.getElementById('length-tip');
const uppercaseTip = document.getElementById('uppercase-tip');
const lowercaseTip = document.getElementById('lowercase-tip');
const numberTip = document.getElementById('number-tip');
const specialTip = document.getElementById('special-tip');

passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  let strength = 0;

  // Check conditions
  if (password.length >= 8) {
    strength++;
    lengthTip.classList.add('valid');
    lengthTip.classList.remove('invalid');
    lengthTip.textContent = "✔ At least 8 characters";
  } else {
    lengthTip.classList.add('invalid');
    lengthTip.classList.remove('valid');
    lengthTip.textContent = "❌ At least 8 characters";
  }

  if (/[A-Z]/.test(password)) {
    strength++;
    uppercaseTip.classList.add('valid');
    uppercaseTip.classList.remove('invalid');
    uppercaseTip.textContent = "✔ At least one uppercase letter";
  } else {
    uppercaseTip.classList.add('invalid');
    uppercaseTip.classList.remove('valid');
    uppercaseTip.textContent = "❌ At least one uppercase letter";
  }

  if (/[a-z]/.test(password)) {
    strength++;
    lowercaseTip.classList.add('valid');
    lowercaseTip.classList.remove('invalid');
    lowercaseTip.textContent = "✔ At least one lowercase letter";
  } else {
    lowercaseTip.classList.add('invalid');
    lowercaseTip.classList.remove('valid');
    lowercaseTip.textContent = "❌ At least one lowercase letter";
  }

  if (/\d/.test(password)) {
    strength++;
    numberTip.classList.add('valid');
    numberTip.classList.remove('invalid');
    numberTip.textContent = "✔ At least one number";
  } else {
    numberTip.classList.add('invalid');
    numberTip.classList.remove('valid');
    numberTip.textContent = "❌ At least one number";
  }

  if (/[!@#$%^&*]/.test(password)) {
    strength++;
    specialTip.classList.add('valid');
    specialTip.classList.remove('invalid');
    specialTip.textContent = "✔ At least one special character (!@#$%^&*)";
  } else {
    specialTip.classList.add('invalid');
    specialTip.classList.remove('valid');
    specialTip.textContent = "❌ At least one special character (!@#$%^&*)";
  }

  // Update Strength Bar
  const strengthPercent = (strength / 5) * 100;
  strengthBar.style.width = strengthPercent + "%";

  if (strength <= 2) {
    strengthBar.style.background = "red";
    strengthText.textContent = "Strength: Weak";
  } else if (strength === 3 || strength === 4) {
    strengthBar.style.background = "orange";
    strengthText.textContent = "Strength: Medium";
  } else if (strength === 5) {
    strengthBar.style.background = "green";
    strengthText.textContent = "Strength: Strong";
  }
});
