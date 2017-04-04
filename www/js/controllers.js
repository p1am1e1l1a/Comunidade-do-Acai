angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login) {
    $scope.email="";
    $scope.senha="";
$scope.cadastrar = function(email, senha) {
        Login.cadastrar(email, senha);
    }

   $scope.entrar= function(email, senha) {
        Login.entrar(email, senha, function(erro){
            if(erro){
                alert(erro)
                return
            }
            $state.go("menu.tarefas")
        });
   }
})


.controller('TarefasCtrl', function($scope, Tarefas) {
  $scope.tarefas = "";
  Tarefas.entrar(function(valores) {
     $scope.tarefas = converterObjParaArray(valores);
   
  });
})

.controller('LocaisCtrl', function($scope, $cordovaGeolocation) {
    
    $scope.locais = "";
    $cordovaGeolocation
        .getCurrentPosition()
            .then(function (position) {
            var lat  = position.coords.latitude
            var long = position.coords.longitude
                
            var map;
            function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: lat, lng: long},
                zoom: 8
            });
            }
            initMap();
            }, function(err) {
                alert(err);
            });
  
});
//AIzaSyCp1vhpfiXSGxvVH-8oIya3INShATg7EJA
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}