const names = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")


const nameRegex = /^[a-zA-Z ]{3,}$/
const emailRegex = /^[a-zA-Z0-9]{9,}@gst\.sies\.edu\.in$/
const passwordRegex = /^([a-zA-Z0-9@]){8,}$/
function validate(e) {
    e.preventDefault();
    if (!nameRegex.test(names.value)) {
        alert("Name Is Not Valid")
        return
    }
    if (!emailRegex.test(email.value)) {
        alert("Email Is Not Valid")
        return
    }
    if (!passwordRegex.test(password.value)) {
        alert("Password Is Not Valid")
        return
    }
    alert("Thanks For Filling the Form")
}
window.onload = function () {
    alert("Welcome to the form")
}
names.addEventListener("blur", function () {
    if (!nameRegex.test(names.value)) {
        names.style.border = "5px solid red"
    }
    else {
        names.style.border = "5px solid green"
    }
})
email.addEventListener("blur", function () {
    if (!emailRegex.test(email.value)) {
        email.style.border = "5px solid red"
    }
    else {
        email.style.border = "5px solid green"
    }
})
password.addEventListener("blur", function () {
    if (!passwordRegex.test(password.value)) {
        password.style.border = "5px solid red"
    }
    else {
        password.style.border = "5px solid green"
    }
})

names.addEventListener("focus", function () {
    names.style.border = "5px solid blue"
})
email.addEventListener("focus", function () {
    email.style.border = "5px solid blue"
})
password.addEventListener("focus", function () {
    password.style.border = "5px solid blue"
})
names.addEventListener("mouseover",function (){
    names.style.border = "5px solid blue"
})
names.addEventListener("mouseout",function (){
    names.style.border = ""
})
email.addEventListener("mouseover",function (){
    email.style.border = "5px solid blue"
})
email.addEventListener("mouseout",function (){
    email.style.border = ""
})
password.addEventListener("mouseover",function (){
    password.style.border = "5px solid blue"
})
password.addEventListener("mouseout",function (){
    password.style.border = ""
})

