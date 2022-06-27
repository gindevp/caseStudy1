
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
        //
        // let element= document.querySelector('form')
        // let element= document.getElementById('form')
        messageOK()
        const myTimeout = setTimeout(redirect,1500)
        function redirect(){
            window.location="../admin/index.html"
        }



    } else {
        event.preventDefault()
        swal("false huhu")
    }
}

