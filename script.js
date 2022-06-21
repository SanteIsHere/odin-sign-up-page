let pass = document.querySelector(".pword")
let conf = document.querySelector(".conf-pword")
const registerButt = document.getElementById("login-butt")

const validate = function() {
    if (!(conf.value) && pass.value) {
        conf.setCustomValidity("*Passwords do not match!")
    }
    if (conf.value != pass.value) {
        console.log(`Confirm Password text: ${conf.value} | Password text: ${pass.value}`)
        conf.reportValidity()
    } else {
        conf.setCustomValidity("")
    }
}

registerButt.addEventListener("click", validate)

