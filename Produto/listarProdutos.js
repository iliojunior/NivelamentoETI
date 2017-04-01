(function () {
    'use strict';

    var app = angular.module('appNivelamento');

    app.controller('ListarProdutosController', ['$scope', 'produtoService', ListarProdutosController]);

    function ListarProdutosController($scope, produtoService) {
        $scope.produtos = produtoService.get();
    }

})();