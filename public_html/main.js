/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require.config({
    urlArgs:"ver=V1.0.0",
    paths:{
        angular:'lib/Angular/angular.min',
        angular_route:'lib/Angular/angular-ui-router.min',
        angular_material:'lib/Angular/angular-material-min.js',
        xeditable:'lib/Angular/xeditable.min',
        bootstrap_ui:'lib/Angular/ui-bootstrap-2.2.0.min',
        bootstrap_ui_tpls:'lib/Angular/ui-bootstrap-tpls-2.2.0.min',
        app:'AppConfig/app',   
        loginctrl:'controller/logincontroller',
    },
    shim:{
        'angular': {
          exports: 'angular'
        },
        angular_route:{
          deps:['angular'] 
        },
        'xeditable': {
          exports: 'angular'
        }
    },
});

var Global={
    rootUrl:'http://192.168.10.11:8080/vivaLunch/rest/',
};

define(['angular','app'],function(Angular){
    
'use strict';

return Angular.bootstrap(document,['App']);

});