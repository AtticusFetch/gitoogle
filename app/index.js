import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchFormController from './searchForm';
import gitSearchService from './searchForm/gitSearchService.js';
const ngModule = angular.module('app', ['ui.router'])
    .config(/*@ngInject*/ function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'searchForm/searchForm.html',
            controller: 'searchFormController',
            controllerAs: 'vm'
        });
        $urlRouterProvider.when('', '/home');
    })
    .controller('searchFormController', searchFormController)
    .service('gitSearchService', gitSearchService);