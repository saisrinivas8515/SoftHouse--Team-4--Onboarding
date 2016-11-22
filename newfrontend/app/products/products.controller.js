function ProductsController(manageService, orderService) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.refreshProducts = refreshProducts;
    vm.refreshOrders = refreshOrders;
    vm.hasProducts = hasProducts;
    vm.acceptOrder = acceptOrder;
    vm.rejectOrder = rejectOrder;


    function $onInit() {
        vm.orders= [];
        vm.products = [];
        vm.refreshProducts();
        vm.refreshOrders();
    }

    function refreshProducts() {

        return manageService.list().then(function refreshedProducts(response) {
            vm.products = response.data;
        });
    }

    function refreshOrders() {
        return orderService.list().then(function refreshedProducts(response) {
            vm.orders = response.data;
        });
    }

    function acceptOrder(id) {

        console.log('acceptingOrder' + id);
        return orderService.destroy(id).then(vm.refreshOrders)

    }

    function rejectOrder(id) {

        console.log('rejectingOrder' + id);

        return orderService.destroy(id).then(vm.refreshOrders)

    }

    function onaccept(id) {



        // return productService.onaccepting(id).then (vm.refreshProducts);

    }

    function hasProducts() {
        return vm.products.length > 0;
    }


}
