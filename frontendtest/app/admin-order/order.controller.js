/*
function OrderController(orderService) {

    var vm = this;

    vm.$onInit = $onInit;
    vm.refreshOrders = refreshOrders;


    function $onInit() {

        vm.refreshOrders();

    }

    function refreshOrders() {
        var promise = orderService.list();

        return promise .then(function refreshedOrders(response) {
            vm.order = response.data;

        });
    }
}*/
