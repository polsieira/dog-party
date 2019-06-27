function nameDog {
  /*get the value from the input*/
  var dogName = document.getElementById('name').value;
  /*change the dog name in the HTML document*/
  document.getElementById('heading-text') = 'A Site About <strong>dogName</strong>';
}