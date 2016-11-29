function manageOrdersController(orderService) {

    var vm = this;

    vm.$onInit = $onInit;
    vm.refreshOrders= refreshOrders;
    vm.acceptOrder = acceptOrder;
    vm.rejectOrder = rejectOrder;

    function $onInit() {
        vm.refreshOrders();
    }

    function refreshOrders() {
        return orderService.list().then(function refreshedProducts(response) {
            vm.orders = response.data;
        });
    }

    function acceptOrder(orderid,productid) {
        var status=1;
        //console.log('acceptingOrder' + id);
        return orderService.updateOrder(orderid, productid, status).then(vm.refreshOrders)

    }

    function rejectOrder(orderid,productid) {
        var status=2;
        // console.log('rejectingOrder' + id);

        return orderService.updateOrder(orderid, productid, status).then(vm.refreshOrders)

    }


}
