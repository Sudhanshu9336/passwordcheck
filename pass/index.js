const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

const lengthTip = document.getElementById("length-tip");
const uppercaseTip = document.getElementById("uppercase-tip");
const lowercaseTip = document.getElementById("lowercase-tip");
const numberTip = document.getElementById("number-tip");
const specialTip = document.getElementById("special-tip");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = 0;


  if (password.length >= 8) {
    lengthTip.classList.replace("invalid", "valid");
    lengthTip.textContent = "✅ At least 8 characters";
    strength++;
  } else {
    lengthTip.classList.replace("valid", "invalid");
    lengthTip.textContent = "❌ At least 8 characters";
  }

  if (/[A-Z]/.test(password)) {
    uppercaseTip.classList.replace("invalid", "valid");
    uppercaseTip.textContent = "✅ At least one uppercase letter";
    strength++;
  } else {
    uppercaseTip.classList.replace("valid", "invalid");
    uppercaseTip.textContent = "❌ At least one uppercase letter";
  }

  if (/[a-z]/.test(password)) {
    lowercaseTip.classList.replace("invalid", "valid");
    lowercaseTip.textContent = "✅ At least one lowercase letter";
    strength++;
  } else {
    lowercaseTip.classList.replace("valid", "invalid");
    lowercaseTip.textContent = "❌ At least one lowercase letter";
  }

  if (/[0-9]/.test(password)) {
    numberTip.classList.replace("invalid", "valid");
    numberTip.textContent = "✅ At least one number";
    strength++;
  } else {
    numberTip.classList.replace("valid", "invalid");
    numberTip.textContent = "❌ At least one number";
  }

  if (/[!@#$%^&*]/.test(password)) {
    specialTip.classList.replace("invalid", "valid");
    specialTip.textContent = "✅ At least one special character (!@#$%^&*)";
    strength++;
  } else {
    specialTip.classList.replace("valid", "invalid");
    specialTip.textContent = "❌ At least one special character (!@#$%^&*)";
  }

  const strengthPercent = (strength / 5) * 100;
  strengthBar.style.width = strengthPercent + "%";

  if (strength <= 2) {
    strengthBar.style.background = "red";
    strengthText.textContent = "Strength: Weak";
  } else if (strength === 3 || strength === 4) {
    strengthBar.style.background = "orange";
    strengthText.textContent = "Strength: Medium";
  } else {
    strengthBar.style.background = "green";
    strengthText.textContent = "Strength: Strong";
  }
});
