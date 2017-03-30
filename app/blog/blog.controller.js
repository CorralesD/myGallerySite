(function() {
    'use strict';

    angular
        .module('app')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function BlogController($stateParams, $state) {
        var vm = this;
        vm.title = 'BlogController';

        activate();
        
    }
})();