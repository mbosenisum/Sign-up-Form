
/* to-do:
separate form background
styling 
redo main text line styling (use margins/padding instead)
*/

function pwdCheck(event) {
    let pwd1 = document.getElementById('password').value;
    let pwd2 = document.getElementById('passwordconfirm').value;

    console.log('');
    console.log("pwd1 = " + pwd1);
    console.log("pwd2 = " + pwd2);
    if (Math.abs(pwd1.localeCompare(pwd2))) {
        console.log('passwords not equal');
        let pwdError = document.getElementById('pwdError');
        pwdError.textContent = "Passwords don't match.";
    }
    else {
        pwdError.textContent = "";
    }
    event.preventDefault();     // prevent refreshing page
}

let form = document.getElementById("form");
form.addEventListener("submit", pwdCheck);