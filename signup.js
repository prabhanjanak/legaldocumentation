document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for signing up!");
});

// Password strength indicator
const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');

passwordInput.addEventListener('input', function () {
    const value = passwordInput.value;
    let strength = "Weak";
    if (value.length >= 8) {
        strength = "Medium";
        if (/[A-Z]/.test(value) && /[0-9]/.test(value)) {
            strength = "Strong";
        }
    }
    passwordStrength.innerText = "Strength: " + strength;
});
