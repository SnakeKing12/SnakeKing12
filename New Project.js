function validateForm() {
  var x = document.forms["My First Form"]["myname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}