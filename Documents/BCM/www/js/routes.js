angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.help', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.contents', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contents.html',
        controller: 'contentsCtrl'
      }
    }
  })

  .state('menu.objectives', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/objectives.html',
        controller: 'objectivesCtrl'
      }
    }
  })

  .state('menu.businessThreats', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/businessThreats.html',
        controller: 'businessThreatsCtrl'
      }
    }
  })

  .state('menu.petronasResiliencyModel', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petronasResiliencyModel.html',
        controller: 'petronasResiliencyModelCtrl'
      }
    }
  })

  .state('menu.pETRONASBCMFramework', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pETRONASBCMFramework.html',
        controller: 'pETRONASBCMFrameworkCtrl'
      }
    }
  })

  .state('menu.riskAssessment', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/riskAssessment.html',
        controller: 'riskAssessmentCtrl'
      }
    }
  })

  .state('menu.businessImpactAnalysis', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/businessImpactAnalysis.html',
        controller: 'businessImpactAnalysisCtrl'
      }
    }
  })

  .state('menu.businessRecoveryStrategyBRS', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/businessRecoveryStrategyBRS.html',
        controller: 'businessRecoveryStrategyBRSCtrl'
      }
    }
  })

  .state('menu.videos', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/videos.html',
        controller: 'videosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});