var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(password.length && username.length != 0){
    if( username == "SAKET" && password == "SAYAK"){
alert ("Login successfully");
window.location = "newpage.html";
return false;
}
    else{
alert ("Invalid User Id/Password");
attempt -- ;
alert("Only "+attempt+" attempt(s) are left");
        if(attempt==0){
            alert("You have reached maximum number of attempts.")
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
return false;
}
}
else{
    alert("User Id/Password can't be empty! Please enter your User Id/Password.");
}
}