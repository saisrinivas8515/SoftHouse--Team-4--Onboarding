/*
function orderService($http, $interpolate) {

    var toListURL = '/api/order/';
    var toDetailURL = $interpolate('/api/orders/{{id}}/');

    return {

        list: list,
        create: create,
        destroy: destroy
    };

    function list() {
        return $http.get(order());

    }

    function create(employeename, employeeid, name, category, specifications) {
        var data = {

            employeename: employeename,
            employeeid: employeeid,
            name: name,
            category: category,
            specifications: specifications
        };

        return $http.post(order(), data);

    }

    function update(employeename, employeeid, name, category, specification) {

        var data = {

            employeename: employeename,
            employeeid: employeeid,
            name: name,
            category: category,
            specifications: specification

        };

        return $http.put(order({id: id}), data);
    }

}

*/
