 <div ng-switch on="vm.isEditingProduct">
  <div class="panel panel-default" ng-switch-when="false">
     <div class="panel-heading">
       <h3 class="panel-title pull-left">{{vm.data.productname}}</h3>
         <div class="pull-right">
            <a ng-click="vm.editProduct()" class="btn btn-xs btn-info">Edit</a>
            <a ng-click="vm.removeProduct()" class="btn btn-xs btn-danger">Remove</a>
         </div>

         <div class="clearfix"></div>
     </div>
         <div class="panel-body">{{vm.data.category}}</div>
         <div class="panel-body">{{vm.data.text}}</div>
  </div>
         <product-form ng-switch-when="true" data="vm.data" on-submit="vm.submitEditedProduct" on-reset="vm.resetEditedProduct"></product-form>
</div>