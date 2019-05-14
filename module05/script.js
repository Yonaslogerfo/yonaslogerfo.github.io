var table = 3;             // Unit of table
var operator ='addition';
var i = 1;
var msg = '<h2>multiplication Tab</h2>';
operator = GetValueFromUser("operator");
table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
  var msg = '';              // Message
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
