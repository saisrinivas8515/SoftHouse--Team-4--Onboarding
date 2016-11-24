function orderService($http, $interpolate,$cookies) {
    var orders = $interpolate('/api/orders/{{id}}');

    return {
        list: list,
        create: create,
        //destroy: destroy,
        updateOrder: updateOrder
    };

    function list() {
        return $http.get(orders());
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

        return $http.post(orders(), data);
    }

    function updateOrder(id,orderstatus) {
        var status=orderstatus;
        return $http.put(orders({ id: id }), status);
    }

  /*  function destroy(id) {
        return $http.delete(order({ id: id }));
    } */

}
