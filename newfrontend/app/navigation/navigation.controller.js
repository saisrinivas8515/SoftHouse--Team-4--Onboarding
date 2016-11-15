function NavigationController($cookies, loginService, $location) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.hasCookies = hasCookies;
    vm.onlogout = logout;

    function $onInit() {
        vm.products = [];
    }

    function hasCookies() {

        var authdata = $cookies.get('authdata') || null;

        if (authdata!= null){

            vm.products= [1];
        }

        return vm.products.length > 0;
    }

    function logout() {

        console.log("test");

        loginService.ClearCredentials();

        $location.path('/home');
    }

}