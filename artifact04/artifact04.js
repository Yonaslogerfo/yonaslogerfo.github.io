
function validateForm()
//  function show_error()
{
  var txt="Thanks for submitting";

  if (document.getElementById('FirstName').value == "" ){
    txt +=",your first name is missing";
  }
  if (document.getElementById('LastName').value == "" ){
    txt +=",your last name is missing";
  }
  if (document.getElementById('EMail').value == "" ){
    txt +=",your email is missing";
  }
  if (document.getElementById('Phone').value == "" ){
    txt +=",your phone number is missing";
  }
  alert(txt);
}
