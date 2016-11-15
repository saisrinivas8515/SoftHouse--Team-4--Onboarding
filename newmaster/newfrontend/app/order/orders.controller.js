function OrdersController(orderService) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.refreshOrders = refreshOrders;

    function $onInit() {
        vm.orders = [];
        vm.refreshOrders();
    }

    function refreshOrders() {
        return orderService.list().then(function refreshedOrders(response) {
            vm.orders = response.orders;
        });
    }


}


