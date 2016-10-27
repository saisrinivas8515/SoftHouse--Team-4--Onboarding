function ProductFormController(productService) {
    var vm = this;

    vm.$onInit = $onInit;

    vm.onSubmit = vm.onSubmit || onUserDidSubmit;
    vm.onReset  = vm.onReset || onUserDidReset;

    vm.showError = showError;

    function $onInit() {
        var parentControllerHasSetData = angular.isDefined(vm.data);
        vm.productname = parentControllerHasSetData ? vm.data.productname : '';
        vm.category = parentControllerHasSetData ? vm.data.category : '';
        vm.text  = parentControllerHasSetData ? vm.data.text  : '';
    }

    function onUserDidSubmit(productname, category, text) {
        return productService.create(productname,category,text)
            .then(vm.productsController.refreshNotes)
            .then(onUserDidReset)
            .catch(vm.showError);
    }

    function onUserDidReset() {
        vm.productname = '';
        vm.category = '';
        vm.text = '';
        vm.productForm.$setPristine();
        vm.productForm.$setUntouched();
    }

    function showError(response) {
        alert(response.data.errors.join("\n"));
    }
}
