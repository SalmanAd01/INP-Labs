const names = document.getElementById("name")
const mobile = document.getElementById("mobile")
const email = document.getElementById("email")
const birthday = document.getElementById("birthday")
const password = document.getElementById("password")


const nameRegex = /^[a-zA-Z ]{3,}$/
const mobileRegex = /^[0-9]{10}$/
const emailRegex = /^[a-zA-Z0-9]{9,}@gst\.sies\.edu\.in$/
const birthdayRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
const passwordRegex = /^([a-zA-Z0-9@]){8,}$/
function validate(e) {
    e.preventDefault();
    if (!nameRegex.test(names.value)) {
        alert("Name Is Not Valid")
        return
    }
    if (!mobileRegex.test(mobile.value)) {
        alert("Mobile No is Not Valid")
        return
    }
    if (!emailRegex.test(email.value)) {
        alert("Email Is Not Valid")
        return
    }
    if (!birthdayRegex.test(birthday.value)) {
        console.log("Hi")
        alert("Birthday is Not Valid")
        return
    }
    const currentDate = new Date();
    const currntYear = currentDate.getFullYear();
    const inputYear = new Date(birthday.value.slice(0, 4)).getFullYear()
    console.log(inputYear, currntYear);
    if (inputYear + 6 >= currntYear) {
        alert("Birthday is Not Valid")
        return
    }
    if (!passwordRegex.test(password.value)) {
        alert("Password Is Not Valid")
        return
    }
    alert("Thanks For Filling the Form")

}