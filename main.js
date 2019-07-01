window.onload=function(){
  var name = document.getElementById( "strong-dog-name" );
  var nameInput = document.querySelector( ".top-section-article-fieldset-input" );
  var button = document.querySelector( ".top-section-article-fieldset-button" );

  button.addEventListener('click', function(event){
    event.preventDefault();  
    name.innerText = nameInput.value; 
    nameInput.value = "";
  });
}