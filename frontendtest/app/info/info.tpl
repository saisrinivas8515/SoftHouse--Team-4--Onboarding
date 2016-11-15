<form name="vm.info" ng-submit="vm.onSubmit(vm.name, vm.category, vm.specifications)" class="panel panel-default">
<div class="container">
    <navigation class="row"></navigation>

    <div class="row">
        <div class="col-xs-12">
            <a ng-click="vm.addFilter('Mobile')" class="btn btn-default">Mobile</a>
            <a ng-click="vm.addFilter('Laptop')" class="btn btn-default">Laptop</a>
            <a ng-click="vm.addFilter('')" ng-if="vm.hasFilter()" class="btn btn-default">all products</a>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specifications</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>
                    <tr ng-repeat="product in vm.products">
                        <td>{{product.name}}</td>
                        <td>{{product.specifications}}</td>
                        <td>{{product.category}}</td>
                        <td><button type="submit" class="btn btn-xs btn-success">Cart</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</div>

</form>