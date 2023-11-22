function validateAndSignUp() {

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;


    if (username === "" || email === "" || password === "" || confirmPassword === "" || dob === "") {
        alert("Fill the form completely.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    window.location.href = "example-page.html";

}