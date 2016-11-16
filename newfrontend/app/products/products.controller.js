function ProductsController(productService, $log) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.refreshProducts = refreshProducts;
    vm.getallorders = getallorders;
    vm.hasProducts = hasProducts;
    vm.addFilter= addFilter;

    function $onInit() {
        vm.products = [];
        vm.filter = "";
        vm.refreshProducts();
    }

    function addFilter(filter) {
        vm.filter = filter;
        vm.getallorders();
    }

    function refreshProducts() {

        return productService.list().then(function refreshedProducts(response) {
            vm.products = response.data;
        });
    }

    function getallorders() {
        promise = productService.filterorder(vm.filter);

        return productService.getorders().then(function refreshedProducts(response) {
            vm.allorders = response.data;
        });
    }



    function hasProducts() {
        return vm.products.length > 0;
    }
}
