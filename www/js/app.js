// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
        templateUrl: 'templates/inicial.html'
      }
    }
  })

  .state('login', {
    url: '/login',
    views: {
      'view-inicial': {
        templateUrl: 'templates/login.html'
      }
    }
  })



  .state('tarefas', {
    url: '/tarefas',
    views: {
      'view-inicial': {
        templateUrl: 'templates/tarefas.html'
      }
    }
  })


    .state('chat', {
    url: '/chat',
    views: {
      'view-inicial': {
        templateUrl: 'templates/chat.html'
      }
    }
  })


   .state('online', {
    url: '/online',
    views: {
      'view-inicial': {
        templateUrl: 'templates/online.html'
      }
    }
  })




  
  $urlRouterProvider.otherwise('/inicial');

});
