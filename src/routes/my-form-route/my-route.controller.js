export default class MyRouteController {
    constructor($scope, $location) {
        $scope.formData = {
            login : 'Your Name',
            password: 'Your Password'
        }
        $scope.showForm = true;
        //$scope.showStatus = false;
        //$scope.handleSubmit = () => console.log(this);
        $scope.handleSubmit = function() { 
            const userData = JSON.stringify(this.formData);
            localStorage.setItem("myKey", userData);
            //$scope.showForm = false;
            if($scope.formData.login !== '' && $scope.formData.password !== '') {
                window.location.hash = '/home';
                //$location.path('/home');
                
                console.log($scope.formData);
            }
        };
    }
}

MyRouteController.$inject = ['$scope'];