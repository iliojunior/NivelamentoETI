(function () {

    'use strict';

    var app = angular.module('appNivelamento');

    app.controller('CreateProdutoController', ['$scope', '$routeParams', 'produtoService', CreateProdutoController]);

    function CreateProdutoController($scope, $routeParams, produtoService) {
        $scope.salvarProduto = salvarProduto;
        $scope.produto = {};

        if (Object.keys($routeParams).length > 0) {

            var produtos = produtoService.get();

            for (var i = 0; i < produtos.length; i++) {
                if (parseInt($routeParams.codigo) === produtos[i].codigo)
                    $scope.produto = produtos[i];
            }
        }

        $scope.test = produtoService.exists($scope.produto);

        function salvarProduto(produto) {
            produtoService.save(produto);
        }

    }

})();