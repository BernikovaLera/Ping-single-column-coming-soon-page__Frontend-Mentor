const form = document.getElementById('form')
const email = document.getElementById('email')
const button = document.getElementById('button')

form.addEventListener("click", (e) => {
    e.preventDefault()
    vilidate()
})

function vilidate() {
    const emailValue = email.value.trim()

    if (emailValue === '') {
        setErrorFor(email, "Whoops! It looks like you forgot to add your email")
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please provide a valid email address")
    } else {
        setSuccessFor(email)
    }
}
function setErrorFor(){

}
function setSuccessFor(){

}
function isEmail(email){
    return /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/.test(email)
}