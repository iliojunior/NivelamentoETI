(function () {

    'use strict';

    angular
        .module('appNivelamento')
        .controller('CreatePedidoController', CreatePedidoController);

    CreatePedidoController.$inject = ["$scope", "produtoService"];

    function CreatePedidoController($scope, $produto) {
        $scope.pedido = {};
        $scope.pesquisaProduto = $produto.get();
        $scope
        $scope.salvar = salvar;

        //******************************************************************************************

        function pesquisarProduto() {

        }

        function salvar(pedido) {

        }
    }

})();