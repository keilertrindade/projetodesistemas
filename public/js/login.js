/*$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});*/





function login() {
    //cument.getElementById("demo").style.color = "red";

    var email = document.getElementById("e-mail").value;
        
    var senha = document.getElementById("senha").value;
   // alert(email +" "+ senha);

	var defaultApp = firebase.initializeApp(defaultAppConfig);

	alert(defaultApp);

/*firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  alert(errorMessage);

  // ...
});*/

}