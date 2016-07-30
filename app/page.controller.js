(function() {
    'use strict';

    angular
        .module('app')
        .controller('PageController', PageController);

    PageController.$inject = ['$document', '$window'];

    /* @ngInject */
    function PageController($document, $window) {
        var vm = this;
        var duration = 500;
        var offset = 30;
        var top = 0;
        var emailSwitch = false;

        vm.title = 'PageController';
        vm.emailMe = "Email Me";


        vm.switchEmail = function(clickEvent) {
            clickEvent.target.blur();
            emailSwitch = !emailSwitch;
            if (emailSwitch === true) {
                vm.emailMe = "toby@tobycurtis.tech";
            } else {
                vm.emailMe = "Email Me";
            }

            clickEvent.target.blur();
        };

        vm.scroll = function(id) {
            var someElement = angular.element(document.getElementById(id));
            $document.scrollToElement(someElement, offset, duration);
            if ($window.innerWidth < 768) {
                $('.collapse').collapse("toggle");
            }
        };

        vm.scrollTop = function() {
            $document.scrollTop(top, duration)
        };

    }
})();
