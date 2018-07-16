export default class MyRouteController {
    constructor($scope) {
        
        $scope.formData = {
            login : 'Your Name',
            password: 'Your Password'
        }
        $scope.showForm = true;
        $scope.handleSubmit = function() { 
            const userData = JSON.stringify(this.formData);
            localStorage.setItem("myKey", userData);
            //$scope.showForm = false;
            if($scope.formData.login !== '' && $scope.formData.password !== '') {
                // $window.location.path = '/home';
                // const a = $location.hash();
                             
                console.log($scope.formData);
            } else {console.log('nothing to view');}
        };
    }
}

MyRouteController.$inject = ['$scope'];