angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $stateParams) {

});

$scope.cadastrar = function(email, senha) {
 Login.cadastrar(email, senha, function(erro) {
  
  });
 }

