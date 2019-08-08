function validate() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');

  if (
    name.value.trim() == '' ||
    email.value.trim() == '' ||
    message.length >= 10
  ) {
    alert('Please, fill in all fields.');
    return false;
  } else {
    true;
  }
}
