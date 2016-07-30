(function() {
    'use strict';

    angular
        .module('app')
        .controller('DocumentController', DocumentController);

    DocumentController.$inject = ['$scope', '$location', '$window', '$document'];

    /* @ngInject */
    function DocumentController($scope, $location, $window, $document) {

        angular.element($window).bind('resize', function() {
            $scope.fitNoTarget();

        });

        $scope.pdfUrl = $location.absUrl() + 'img/resume.pdf';

    }
})();
