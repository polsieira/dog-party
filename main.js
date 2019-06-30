var name = document.getElementById( "strong-dog-name" );
var nameInput = document.getElementsByClassName( "top-section-article-fieldset-input" );

document.querySelector( "top-section-article-fieldset-button" ).addEventListener('click', function(event){
  event.preventDefault();  
  name.innerHTML = nameInput.value; 
  nameInput.value = "";
});

