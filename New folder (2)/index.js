


document.getElementById("button").onclick = function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;


    let errorusername = document.getElementById("error-username")
    let errorpassword = document.getElementById("error-password")
    let erroremail = document.getElementById("error-email")
    
    

    if(username.length > 6){
        errorusername.textContent = "Username Accepted"
        errorusername.style.color = "green"
    }else{
        errorusername.textContent = "Less than 6 letters "
        errorusername.style.color = "red"
    }
    if(password.length === 0){
        errorpassword.textContent = "filed is empty"
        errorpassword.style.color = "red"
    }
    else{
        errorpassword.textContent = "your good"
        errorpassword.style.color = "green"
    }if(email.length > 4){
        erroremail.textContent = "your fine"
        erroremail.style.color = "green"
    }else{
        erroremail.textContent ="less than 4 letters"
        error.style.color = "red"
    }
}
