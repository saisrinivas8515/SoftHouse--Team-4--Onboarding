function orderService($http, $interpolate) {
    var toListURL = '/api/orders/';
    var toDetailURL = $interpolate('/api/orders/{{id}}/');

    return {
        list: list,
        create: create,
        destroy: destroy

    };

    function list() {
        return $http.get(order());
    }

    function create(employname, employid,name, category, specifications) {
        var order = {
            employname: employname,
            employid: employid,
            name: name,
            category: category,
            specifications: specifications
        }
        return $http.post(toListURL, order);
    }

    function destroy(id) {
        return $http.delete(order({ id: id }));
    }


}

