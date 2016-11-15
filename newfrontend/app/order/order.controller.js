function OrderController(orderService) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.acceptOrder = acceptOrder;
    vm.removeOrder = removeOrder;
    vm.showError = showError;

    function $onInit() {
        // vm.notesController will be our parent controller (NotesController)
        // vm.data will contain the data of this note
        vm.removeOrder();
    }

    function acceptOrder() {
        orderService.create(vm.order)

    }
    function removeOrder() {
        orderService.destroy(vm.order.id)
            .then(vm.ordersController.refreshOrders);
    }

    function showError(response) {
        alert(response.order.errors.join("\n"));
    }
}

