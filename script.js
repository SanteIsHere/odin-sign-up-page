const passFields = document.querySelectorAll(".pword")
const registerButt = document.getElementById("login-butt")

const validate = function() {
    if (passFields[0].textContent != passFields[1].textContent) {
        console.log("Passwords do not match!")
    }
}

