(function () {

    'use strict';

    var app = angular.module('appNivelamento');

    app.controller('IndexController', ['$scope', IndexController]);
    app.config(['$routeProvider', configRoutes]);
    app.directive('ilioNavbar', ilioNavbar);

    function ilioNavbar() {
        return {
            restrict: 'E',
            templateUrl: 'Partials/navbar.html'
        };
    }

    function configRoutes($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'Partials/empty.html'
            })
            .when("/produto/lista", {
                templateUrl: 'Produto/listarProdutos.html',
                controller: 'ListarProdutosController'
            })
            .when("/produto/create", {
                templateUrl: 'Produto/createProdutos.html',
                controller: 'CreateProdutoController'
            })
            .when("/produto/edit/:codigo", {
                templateUrl: 'Produto/createProdutos.html',
                controller: 'CreateProdutoController'
            })
            .otherwise({
                redirectTo: '/produto/lista'
            });
    }

    function IndexController($scope) {
        $scope.visibilityMenuCadastro = false;
        $scope.visibilitySubMenu = false;

        $scope.setVisibleMenu = setVisibleMenu;
        $scope.isMenuVisible = isMenuVisible;
        $scope.setVisibleSubMenu = setVisibleSubMenu;

        function setVisibleMenu(visible) {
            $scope.visibilityMenuCadastro = visible;
        }

        function setVisibleSubMenu(visible) {
            $scope.visibilitySubMenu = visible;
        }

        function isMenuVisible() {
            return ($scope.visibilityMenuCadastro || $scope.visibilitySubMenu);
        }

    }

})();