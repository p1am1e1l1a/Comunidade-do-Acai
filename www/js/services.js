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
    cadastrar: function (email, senha) {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(function() {
        alert('funcionou');
      })
      .catch(function(error) {
  
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });
    },
      entrar: function (email, senha) {
        firebase.auth().signInWithEmailAndPassword(email, senha)
          .then(function() {
            alert('funcionou');
          })
       .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
        })
      }
    }
})

.factory('Tarefas', function(Context) {
  return {
   entrar: function(entrar) {
      firebase.database().ref('tarefas').on('value', function(snapshot){
      

      })
    }
  }
})



