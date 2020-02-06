var attempt = 3; // Variable to count number of attempts.

$(document).ready(function() {
  bindKeyEvents();
});

function bindKeyEvents() {
  document.getElementById("passwordField")
    .addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
    });
  document.getElementById("username")
    .addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
    });
}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("passwordField").value;
  if (username == "admin" && password == "admin123") {
    window.location = "index.html"; // Redirecting to other page.
    return false;
  } else if (username == "anja" && password == "anja123") {
    window.location = "../user1/index.html"; // Redirecting to other page.
    return false;
  }
  else if (username == "markus" && password == "markus123") {
    window.location = "../user2/index.html"; // Redirecting to other page.
    return false;
  }
  else if (username == "bjorn" && password == "bjorn123") {
    window.location = "../user3/index.html"; // Redirecting to other page.
    return false;
  }
  else if (username == "martin" && password == "martin123") {
    window.location = "../user4/index.html"; // Redirecting to other page.
    return false;
  }
  else {
    attempt--;// Decrementing by one.
    alert("You have" + attempt + " attempts left;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("passwordField").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}