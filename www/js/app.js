// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('inicial', {
    url: '/inicial',
    views: {
      'view-inicial': {
        templateUrl: 'templates/inicial.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    abstract: true,
    views: {
      'view-inicial': {
        templateUrl: 'templates/menu.html'
      }
    }
  })


  .state('menu.tarefas', {
    url: '/tarefas',
    views: {
      'view-menu': {
        templateUrl: 'templates/tarefas.html'
      }
    }
  })

  .state('menu.configuracoes', {
    url: '/configuracoes',
    views: {
      'view-menu': {
        templateUrl: 'templates/configuracoes.html'
      }
    }
  })

    .state('menu.chat', {
    url: '/chat',
    views: {
      'view-menu': {
        templateUrl: 'templates/chat.html'
      }
    }
  })

.state('menu.locais', {
    url: '/locais',
    views: {
      'view-menu': {
        templateUrl: 'templates/locais.html',
        controller: 'LocaisCtrl'
      }
    }
  })

   .state('menu.online', {
    url: '/online',
    views: {
      'view-menu': {
        templateUrl: 'templates/online.html'
      }
    }
  })


  .state('menu.ajuda', {
    url: '/ajuda',
    views: {
      'view-menu': {
        templateUrl: 'templates/ajuda.html'
      }
    }
  })

  .state('menu.edit', {
    url: '/edit',
    views: {
      'view-menu': {
        templateUrl: 'templates/edit.html'
      }
    }
  })

 /* .state('foto', {
    url: '/foto',
    views: {
      'view-inicial': {
        templateUrl: 'templates/foto.html'
      }
    }
  })*/
  
  .state('menu.contatos', {
    url: '/contatos',
    views: {
      'view-menu': {
        templateUrl: 'templates/contatos.html'
      }
    }
  })

  .state('menu.coversas', {
    url: '/coversas',
    views: {
      'view-menu': {
        templateUrl: 'templates/coversas.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/inicial');

});
