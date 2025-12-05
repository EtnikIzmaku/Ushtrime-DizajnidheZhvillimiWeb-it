let form = document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById("password")

form.addEventListener("submit",function(e){
    e.preventDefault()

    var emailText = email.value
    var passwordText = password.value
    alert("email: "+emailText+" password: "+passwordText)
})