(function () {

    'use strict';

    var app = angular.module('appNivelamento');

    app.factory('produtoService', produtoService);

    var produtosTeste = [
        {
            codigo: 1,
            nome: 'Tomate',
            preco: 2.5
        },
        {
            codigo: 2,
            nome: 'Laranja',
            preco: 4
        },
        {
            codigo: 5,
            nome: 'Arroz',
            preco: 7
        }
    ];

    function produtoService() {
        var produtos = [];

        produtos = produtosTeste;

        function get() {
            return produtos;
        }

        var factory = {
            get: get
        };

        return factory;
    }

})();