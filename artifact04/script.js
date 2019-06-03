
function validateForm()
//  function show_error()
{
  var txt="Thanks for submitting";

  if (document.getElementById('FirstName').value == "" ){
    txt +=",your first name is missing";
    var txt="firstname not found";
    //1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("firstname").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname);
  }
 
//  function show_error()
  if (document.getElementById('LastName').value == "" ){
    txt +=",your lastname is missing";
    var txt="lasttname not found";
  }
  
//  function show_error()
  if (document.getElementById('EMail').value == "" ){
    txt +=",your email is missing";
    var txt="email not found";
  }
  
//  function show_error()
  if (document.getElementById('Phone').value == "" ){
    txt +=",your phone number is missing";
     var txt="phone number not found";
  }
  alert(txt);
}
