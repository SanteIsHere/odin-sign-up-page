const passFields = document.querySelectorAll(".pword")
const registerButt = document.getElementById("login-butt")

const validate = function() {
    if (passFields[0].innerHTML != passFields[1].innerHTML) {
        console.log("Passwords do not match!")
    }
}

