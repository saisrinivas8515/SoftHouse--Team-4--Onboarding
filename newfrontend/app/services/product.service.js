function productService($http, $interpolate,$cookies, $q) {
    var product = $interpolate('/api/product/{{id}}');
    var order1 = $interpolate('/api/orders/{{id}}');
    var order2 = $interpolate('/api/orders/{{id}}');

    return {
        list: list,
        filter: filter,
        //filterorder: filterorder,
        create: create,
        order: order,
        getorders: getorders,
        destroy: destroy,
        update: update,
        onaccepting: onaccepting
    };

    function list() {
        return $http.get(product());
    }

    function getorders() {
        return $http.get(order1());
    }

    function filter(filter) {
        return $http.get(product() + '?type=' + filter)
    }

   /* function filterorder(filter) {
        return $http.get(order2() + '?type=' + filter)
    }*/


    function create(name, category, specifications) {
        var data = {
            name: name,
            category: category,
            specifications: specifications

        };

        return $http.post(product(), data);
    }

   function order(orderedproduct) {

       var userid= $cookies.get('userid');
       var username= $cookies.get('username');


        console.log(userid);
        var data = {
            productid:orderedproduct.id,
            name: orderedproduct.name,
            category: orderedproduct.category,
            specifications: orderedproduct.specifications,
            userid: parseInt(userid),
            username: username

        };

        return $http.post(order1(), data);
    }

    function onaccepting(id) {

        return $http.delete(product({ id: id }));

    }


    function destroy(id) {
        return $http.delete(product({ id: id }));
    }

    function update(id, name, category, specifications) {
        var data = {
            name: name,
            category: category,
            specifications: specifications
        };

        return $http.put(product({ id: id }), data);
    }
}
