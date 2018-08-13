/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define([
   'angular',
   'angular_route',
   'bootstrap_ui_tpls',
   'xeditable',
   'loginctrl',
    
],function(Angular){
    Angular.module('App',['ui.router','App.loginctrl'])
            .config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider, $urlRouterProvider,$httpProvider){
               $urlRouterProvider.otherwise('login');
                    $stateProvider
                    .state('login',{
                            url:'/login',
                    views:{
                                '':{
                                    templateUrl:'templates/master/masterView.html',
                    },
                       
                                 'header@login':{
                        templateUrl:'templates/header/header.html',
                    },
                    'templateContainer@login':{
                          templateUrl:'templates/login.html',
                          controller:'loginctrl',
                    }
                    },
                    
                   
                })     
            }]);
});