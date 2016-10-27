<form name="vm.productForm" ng-submit="vm.onSubmit(vm.productname, vm.category, vm.text)" class="panel panel-default">
    <div class="panel-body">
        <div class="form-group">
            <label for="productname">Product Name</label>
            <input id="productname" name="productname" class="form-control" ng-model="vm.productname" type="text" placeholder="Name of the product ..." autocomplete="off" required>
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <input id="category" name="category" class="form-control" ng-model="vm.category" type="text" placeholder="Category" autocomplete="off" required>
        </div>
        <div class="form-group">
            <label for="text">Text</label>
            <textarea id="text" name="text" class="form-control" ng-model="vm.text" placeholder="Specifications ..." required></textarea>
        </div>
    </div>

    <div class="panel-footer text-right">
        <button type="submit" class="btn btn-xs btn-success">Submit</button>
        <button type="reset" class="btn btn-xs btn-default" ng-click="vm.onReset()">Reset</button>
    </div>
</form>