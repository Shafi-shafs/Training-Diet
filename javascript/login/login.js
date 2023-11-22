function ValidationForm() {
    var uname = document.myform.username.value;
    var pass = document.myform.password.value;
    console.log(uname + " " + pass);

    if (uname == "") {
        alert("Please enter the username");
        return false;
    }

    if (pass == "") {
        alert("Please enter the password");
        return false;
    } else {
        return true;
    }
}
