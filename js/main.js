//login function
document.getElementById("loginBtn").addEventListener("click", function (event) {
  //prevent reload all windows
  event.preventDefault();

  //getting the value from the login form
  const uEmail = document.getElementById("userEmail").value;
  const uPass = document.getElementById("userPassword").value;

  //validation the value in basic way

  if (uEmail === "user1@payoomfs.com" && uPass === "1234") {
    // console.log("Email & password received");
    let url = "./home.html";
    url = url.substring(0, url.lastIndexOf("."));
    window.location.href = url;
  } else {
    window.alert("Wrong details entered.");
  }
});
