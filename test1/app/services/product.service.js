function productService($http, $interpolate) {
    var product = $interpolate('/api/product/{{id}}');

    return {
        list: list,
        create: create,
        destroy: destroy,
        update: update
    };

    function list() {
        return $http.get(product());
    }

    function create(productname, category, text) {
        var data = {
            productname: productname,
            category: category,
            text: text
        };

        return $http.post(product(), data);
    }

    function destroy(id) {
        return $http.delete(product({ id: id }));
    }

    function update(id, productname, category, text) {
        var data = {
            productname: productname,
            category: category,
            text: text
        };

        return $http.put(product({ id: id }), data);
    }
}
