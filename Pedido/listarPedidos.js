(function () {

    'use strict';

    angular
        .module('appNivelamento')
        .controller("ListarPedidosController", ListarPedidosController);

    ListarPedidosController.$inject = ['$scope', 'pedidoService'];

    Number.prototype.addLeftPad = function (length) {
        var output = this + '';
        while (output.length < length) {
            output = "0" + output;
        }

        return output;
    };

    function ListarPedidosController($scope, pedidoService) {
        $scope.pedidos = pedidoService.get();
        $scope.formatData = formatData;

        function formatData(data) {
            return data.getDate().addLeftPad(2) + "/" +
                data.getMonth().addLeftPad(2) + "/" +
                data.getFullYear();
        }
    }

})();