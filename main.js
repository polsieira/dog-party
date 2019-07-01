window.onload=function(){
  var name = document.getElementById( "strong-dog-name" );
  var nameInput = document.querySelector( ".top-section-article-fieldset-input" );
  var namingButton = document.querySelector( ".top-section-article-fieldset-button" );

  namingButton.addEventListener('click', function(event){
    event.preventDefault();  
    name.innerText = nameInput.value; 
    nameInput.value = "";
  });

  var howButton = document.querySelector( "#button-how" );
  var howText = document.querySelector( "#paragraph-how");

  howButton.addEventListener('click', function(event){
    event.preventDefault();
    if (howText.style.display === "block") {
      howText.style.display = "none";
    } else {
      howText.style.display = "block";
    }
  });

  var whatButton = document.querySelector( "#button-what" );
  var whatText = document.querySelector( "#paragraph-what");

  whatButton.addEventListener('click', function(event){
    event.preventDefault();
    if (whatText.style.display === "block") {
      whatText.style.display = "none";
    } else {
      whatText.style.display = "block";
    }
  });

  var factsButton = document.querySelector( "#button-facts" );
  var factsText = document.querySelector( "#paragraph-facts");

  factsButton.addEventListener('click', function(event){
    event.preventDefault();
    if (factsText.style.display === "block") {
      factsText.style.display = "none";
    } else {
      factsText.style.display = "block";
    }
  });    
}