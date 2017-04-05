(function () {
    'use strict';

    var app = angular.module('appNivelamento');

    app.controller('ListarProdutosController', ['$scope', 'produtoService', ListarProdutosController]);

    function ListarProdutosController($scope, produtoService) {
        $scope.produtos = produtoService.get();
        $scope.search = "";
        $scope.deletarProduto = deletarProduto;

        function deletarProduto(produto) {
            var confirmacao = confirm("Deseja realmente deletar o produto: ");

            if (!confirmacao)
                return false;

            var lista = produtoService.get();
            var index = lista.indexOf(produto);

            produtoService.get().splice(index, 1);
        }
    }

})();