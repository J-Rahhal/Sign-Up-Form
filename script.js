document.querySelector('#submit').onclick = () => {
    let password = document.getElementById('password').value,
    confirmPassword = document.getElementById('conpassword').value;
    if(password == "" || confirmPassword == "") {
        alert ('Password fields cannot be empty!');
    }
    else if(password!==confirmPassword){
        alert ('Passwords do not match!');
    }
    else{
        alert ('success!');
    }
};
