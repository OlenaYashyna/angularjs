export default class HomeRouteController {
    constructor($scope) {
        $scope.todos = [];
        $scope.handleAdd = function() {
          const newItem = this.todoItem + this.priority;
          $scope.todos.push(newItem);
          this.todoItem = '';
          this.priority = '';
          
        };
        // $scope.$onInit = function() {
        //     this.todos = [];
        // };
        
        
    }
}

HomeRouteController.$inject = ['$scope'];