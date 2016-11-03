function NoteFormController(noteService) {
    var vm = this;

    vm.$onInit = $onInit;

    vm.onSubmit = vm.onSubmit || onUserDidSubmit;
    vm.onReset  = vm.onReset || onUserDidReset;

    vm.showError = showError;

    function $onInit() {
        var parentControllerHasSetData = angular.isDefined(vm.data);
        vm.title = parentControllerHasSetData ? vm.data.title : '';
        vm.text1  = parentControllerHasSetData ? vm.data.text1  : '';
        vm.text2 = parentControllerHasSetData ? vm.data.text2 : '';
    }

    function onUserDidSubmit(title, text1, text2) {
        return noteService.create(title, text1, text2)
            .then(vm.notesController.refreshNotes)
            .then(onUserDidReset)
            .catch(vm.showError);
    }

    function onUserDidReset() {
        vm.title = '';
        vm.text1 = '';
        vm.text2 = '';
        vm.noteForm.$setPristine();
        vm.noteForm.$setUntouched();
    }

    function showError(response) {
        alert(response.data.errors.join("\n"));
    }
}