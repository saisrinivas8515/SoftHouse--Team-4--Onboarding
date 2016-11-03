<form name="vm.noteForm" ng-submit="vm.onSubmit(vm.title, vm.text)" class="panel panel-default">
    <div class="panel-body">
        <div class="form-group">
            <label for="title">Category</label>
            <input id="title" name="title" class="form-control" ng-model="vm.title" type="text" placeholder="Enter the category of the product" autocomplete="off" required>
        </div>

        <div class="form-group">
            <label for="text1">Name</label>
            <textarea id="text" name="text1" class="form-control" ng-model="vm.text" placeholder="Enter name of the product" required></textarea>
        </div>

        <div class="form-group">
            <label for="text2">Specifications</label>
            <textarea id="text2" name="text2" class="form-control" ng-model="vm.text" placeholder="Enter the specifications" required></textarea>
    </div>

    <div class="panel-footer text-right">
        <button type="submit" class="btn btn-xs btn-success">Submit</button>
        <button type="reset" class="btn btn-xs btn-default" ng-click="vm.onReset()">Reset</button>
    </div>
</form>