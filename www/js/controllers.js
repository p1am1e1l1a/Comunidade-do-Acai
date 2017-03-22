angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Login) {
    $scope.email="";
    $scope.senha="";
$scope.cadastrar = function(email, senha) {
        Login.cadastrar(email, senha);
    }

   $scope.entrar= function(email, senha) {
        Login.entrar(email, senha);
   }
});

controller('TarefasCtrl', function($scope, Tarefas) {
  $scope.tarefas = "";
  Tarefas.entrar(function(valores) {
     $scope.tarefas = converterObjParaArray(valores);
   
  });
})