
function validateForm()
//  function show_error()
{
  var txt="Thanks for submitting";

  if (document.getElementById('FirstName').value == "" ){
    txt +=",your first name is missing";
    var txt="firstname not found";
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
