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
            codigo: 5,
            nome: 'Arroz',
            preco: 7
        },
        {
            codigo: 2,
            nome: 'Laranja',
            preco: 4
        },
        {
            codigo: 3,
            nome: 'Ilio',
            preco: 3
        }

    ];

    function produtoService() {
        var produtos = [];

        produtos = produtosTeste;

        function get() {
            return produtos;
        }

        function add(produto) {
            produtos.push(produto);
        }

        function exists(produto) {
            var exist = false;

            get().forEach(function (item) {
                exist = (item === produto);
            });

            return exist;
        }

        function save(novoProduto) {
            if (!exists(novoProduto))
                add(novoProduto);

            novoProduto = {};
        }

        var factory = {
            get: get,
            save: save,
            exists: exists,
        };

        return factory;
    }

})();