angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('goals', {
    url: '/goals',
    templateUrl: 'templates/goals.html',
    controller: 'goalsCtrl'
  })

  .state('goals2', {
    url: '/goals2',
    templateUrl: 'templates/goals2.html',
    controller: 'goals2Ctrl'
  })

  .state('healthdata', {
    url: '/healthdata',
    templateUrl: 'templates/healthdata.html',
    controller: 'healthdataCtrl'
  })

  .state('healthdata2', {
    url: '/healthdata2',
    templateUrl: 'templates/healthdata2.html',
    controller: 'healthdata2Ctrl'
  })

  .state('redeem', {
    url: '/redeem',
    templateUrl: 'templates/redeem.html',
    controller: 'redeemCtrl'
  })

  .state('inbox', {
    url: '/inbox',
    templateUrl: 'templates/inbox.html',
    controller: 'inboxCtrl'
  })

  .state('history', {
    url: '/history',
    templateUrl: 'templates/history.html',
    controller: 'historyCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('tabsController.inbox', {
    url: '/inbox',
    views: {
      'tab1': {
        templateUrl: 'templates/inbox.html',
        controller: 'inboxCtrl'
      }
    }
  })

  .state('tabsController.history', {
    url: '/history',
    views: {
      'tab2': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

var onboarding = 0;
if(!onboarding) {
  $urlRouterProvider.otherwise('/goals')
} else {
  $urlRouterProvider.otherwise('/tabs/inbox')
}  

});