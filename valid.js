
function validate() {
   if (document.getElementById("username").value == "admin"
      && document.getElementById("password").value == "12345") {
      // alert("validation succeeded");
      location.href = "home.html";
   }
   else {
      // alert("validation failed");
      document.getElementById("message").innerHTML = "! Invalid Credentials";

   }
}

function logout(){
   location.href = "login.html";

}