
function checkLoginRedirect(uname, pword) {
    console.log(uname)
    console.log(pword)
    if (uname == "quyet79" && pword == 123456) {
        return true
    } else {
        return false
    }
}
function redirectAdmin() {
    let pass = document.getElementById("passWord").value;
    let name = document.getElementById("userName ").value;
    if (checkLoginRedirect(name, pass)) {
        // let element= document.querySelector('form')

        let element= document.getElementById('form')
        element.setAttribute('action','index.html')

    } else {
        alert("sai roi")
    }
}

