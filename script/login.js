document.getElementById("login-btn").addEventListener("click",function(){
    // get the num
    const number = parseInt(document.getElementById('number').value);
    // get the pin
    const pin = parseInt(document.getElementById('pin').value);

    if(number === 12345678912 && pin === 1234){
        alert ("login successful");
        window.location.assign('./home.html ')
    }
    else{
        alert("Login Failed");
        return;
    }

}


)