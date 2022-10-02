let signIn = document.querySelector("#signIn");
let email = document.querySelector("#email");
let pwd = document.querySelector("#pwd");

signIn.addEventListener("click",signedIn);

function signedIn(){

    let x = localStorage.getItem("email");
    let y = localStorage.getItem("password");
    
    if(email.value == "" || pwd.value == ""){
        alert("Please fill necessary details");
    } else if(email.value == x && pwd.value == y){
        // alert("Logged in successfully");
        signIn.href = "profile.html";
    } else{
        alert("Invalid Login credentials");
    }
}