function orderService($http, $interpolate,$cookies, $q) {
    var order = $interpolate('/api/orders/{{id}}');

    return {
        list: list,
        create: create,
        destroy: destroy
    };

    function list() {
        return $http.get(order());
    }

    function create(orderedproduct) {

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

        return $http.post(order(), data);
    }


    function destroy(id) {
        return $http.delete(order({ id: id }));
    }

}
