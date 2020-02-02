var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin123"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
} else if (username == "anja" && password == "anja123") {
  alert ("Login successfully");
window.location = "../../user1/default/index.html"; // Redirecting to other page.
return false;
}
  else if (username == "markus" && password == "markus123") {
  alert ("Login successfully");
window.location = "../../user2/default/index.html"; // Redirecting to other page.
return false;
}
else if (username == "bjorn" && password == "bjorn123") {
  alert ("Login successfully");
window.location = "../../user3/default/index.html"; // Redirecting to other page.
return false;
}
else if (username == "martin" && password == "martin123") {
  alert ("Login successfully");
window.location = "../../user4/default/index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}