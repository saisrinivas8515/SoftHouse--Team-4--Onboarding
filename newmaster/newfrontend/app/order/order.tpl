<div class="container">
    <navigation class="row"></navigation>

       <div class="row">
        <div class="col-xs-12">
            <table class="table">
                <thead>
                <tr>
                    <th>Employ Name</th>
                    <th>Employ ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Specifications</th>
                </tr>
                </thead>

                <tbody>
                <tr ng-repeat="order in vm.orders">
                    <td>{{order.employname}}</td>
                    <td>{{order.employid}}</td>
                    <td>{{order.name}}</td>
                    <td>{{order.specifications}}</td>
                    <td>{{order.category}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
