function LoginController (loginService, $log) {
    var vm = this;
    vm.$onInit = $onInit;
    vm.onSubmit = onUserDidSubmit;
    vm.onReset = onUserDidReset;
    vm.showError = showError;
    vm.showSuccess = showSuccess;

    function $onInit() {
        var parentControllerHasSetData = angular.isDefined(vm.data);
        vm.username = parentControllerHasSetData ? vm.data.username : '';
        vm.password = parentControllerHasSetData ? vm.data.password : '';
    }

    function onUserDidsubmit(username, password) {

        var test = function (response) {

            if (response.success) {
                loginService.SetCredentials($scope.username, $scope.password);
                $log.path('/home');
            } else {

                vm.showError();
                vm.onReset();


            }
        }
    }
}