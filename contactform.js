function validate() {
  var name = document.getElementById('name');
  var subject = document.getElementById('subject');
  var email = document.getElementById('email');
  var message = document.getElementById('message');

  if (
    name.value.trim() == '' ||
    subject.length >= 2 ||
    email.value.trim() == '' ||
    message.length >= 10
  ) {
    alert('Please, fill in all fields.');
    return false;
  } else {
    true;
  }
}
