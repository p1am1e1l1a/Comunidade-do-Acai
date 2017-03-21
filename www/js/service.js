angular.module('starter.services', [])

.factory('Context', function(){
var config = {
    apiKey: "AIzaSyC3vC1JD9RG0sY2HdcrPHHza0mu2YwDwno",
    authDomain: "comunidade-do-acai.firebaseapp.com",
    databaseURL: "https://comunidade-do-acai.firebaseio.com",
    storageBucket: "comunidade-do-acai.appspot.com",
    messagingSenderId: "398982363648"
  };
  firebase.initializeApp(config);

return {
  get: function() {
    return firebase;
  }
}

})
.factory('Login', function(Context) {
  return {
      cadastrar: function () {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
      },
      login: function() {
 
      }
  }
})



