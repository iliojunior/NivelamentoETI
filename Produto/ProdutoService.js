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
            return get()
                    .filter(function (item) {
                        return (item === produto);
                    }).length > 0;
        }

        function existKey(key) {
            return get()
                    .filter(function (item) {
                        return (item.codigo === key);
                    }).length > 0;
        }

        function save(novoProduto) {
            novoProduto.codigo = parseInt(novoProduto.codigo);
            novoProduto.preco = parseFloat(novoProduto.preco);

            if (!exists(novoProduto))
                add(novoProduto);

            novoProduto = {};
        }

        var factory = {
            get: get,
            save: save,
            exists: exists,
            existKey: existKey,
        };

        return factory;
    }

})();