(function () {

    'use strict';

    angular
        .module('appNivelamento')
        .factory('pedidoService', pedidoService);

    pedidoService.$inject = ['produtoService'];

    function pedidoService(produtoService) {
        var pedidosTeste = [
            {
                numero: 1,
                emissao: new Date(),
                total: 15,
                items: [
                    {
                        quantidade: 3,
                        preco: 5,
                        desconto: 0,
                        total: 15,
                        produto: produtoService.get()[1]
                    }
                ]

            },
            {
                numero: 2,
                emissao: new Date(),
                total: 14,
                items: [
                    {
                        quantidade: 2,
                        preco: 7,
                        desconto: 0,
                        total: 15,
                        produto: produtoService.get()[2]
                    }
                ]
            }
        ];

        var pedidos = pedidosTeste;

        function get() {
            return pedidos
        }

        var factory = {
            get: get
        };

        return factory;
    }

})();