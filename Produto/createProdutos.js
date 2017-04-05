(function () {

    'use strict';

    angular
        .module('appNivelamento')
        .controller('CreateProdutoController', ['$scope', '$location', '$routeParams', 'produtoService', CreateProdutoController]);

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function isDefined(value) {
        return (typeof value !== 'undefined');
    }

    function CreateProdutoController($scope, $location, $routeParams, produtoService) {
        $scope.produto = {};
        $scope.isNew = !$scope.isEdit;
        $scope.formularioInvalido = false;
        $scope.salvarProduto = salvarProduto;
        $scope.isEdit = (Object.keys($routeParams).indexOf("codigo") !== -1);

        if (Object.keys($routeParams).length > 0) {
            console.debug(produtoService.get());

            $scope.produto = produtoService.get().filter(function (item) {
                return (item.codigo === parseInt($routeParams.codigo));
            })[0];
        }

        //*************************************************************************//

        function cadastroIsValido(produto) {
            $scope.produto.codigoIsInvalid = !(isNumber(produto.codigo) && produto.codigo > 0 && !produtoService.existKey(produto.codigo));
            $scope.produto.nomeIsInvalid = !(isDefined(produto.nome) && produto.nome.length > 0);
            $scope.produto.precoIsInvalid = !(isNumber(produto.preco) && produto.preco > 0);

            var formularioInvalido = !$scope.isEdit && ($scope.isNew && ($scope.produto.codigoIsInvalid || $scope.produto.nomeIsInvalid || $scope.produto.precoIsInvalid));
            $scope.formularioInvalido = formularioInvalido;

            return !formularioInvalido;
        }

        function salvarProduto(produto, $event) {
            if (isDefined(produto) && cadastroIsValido(produto)) {

                $scope.codigo = parseInt(produto.codigo);
                $scope.preco = parseFloat(produto.preco);

                produtoService.save(produto);
                alert("Produto salvo com sucesso!");

                $location.path("#!/produto/lista");
            }
            $event.preventDefault();
        }
    }

})();