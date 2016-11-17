// function LogoutController(loginService, $location){
//     var vm = this;
//     vm.$onInit = $onInit;
//     vm.onSubmit = onUserDidSubmit;
//     // vm.onReset = onUserDidReset;
//     vm.showError = showError;
//     vm.showSuccess = showSuccess;
//
//     function $onInit() {
//         var parentControllerHasSetData = angular.isDefined(vm.data);
//         vm.username = parentControllerHasSetData ? vm.data.username : '';
//         vm.password = parentControllerHasSetData ? vm.data.password : '';
//     }
//     function onUserDidSubmit(username, password){
//         loginService.ClearCredentials();
//     }
//     function showSuccess() {
//         alert("Success");
//     }
//
//     function showError() {
//         alert("fail");
//     }
// }

function LogoutController($location) {
    Session.clear();
    $location.path('/home');
}