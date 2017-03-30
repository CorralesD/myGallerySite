(function () {
    'use strict';
    
    angular
        .module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            
            $stateProvider
                .state('gallery', {
                    url: '/gallery',
                    abstract: true,
                    templateUrl: 'index.html'
            })


                .state('blog', {
                    url: '/blog',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('blog.detail', {
                    url: '/blog.detail',
                    controller: 'BlogController as blogCtrl',
                    templateUrl: '/app/blog/blog.html'
                });

            
    });
})();