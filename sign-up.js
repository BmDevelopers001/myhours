let submit = document.querySelector("#submit");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let pwd = document.querySelector("#pwd");


submit.addEventListener("click",submitted)

function submitted(){
    if(name.value == "" || email.value == "" || pwd.value == ""){
        alert("Please submit all required details");
    } else{
        localStorage.setItem("name",name.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",pwd.value);
        // alert("Signed up successfully");
        submit.href = "sign-in.html";
    }
}