import MyRouteController from './src/routes/my-form-route/my-route.controller';
import HomeRouteController from './src/routes/home-route/home-route.controller';
import template from './src/routes/my-form-route/my-route.html';
import homeTemplate from './src/routes/home-route/home-route.html';

export default function AppConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when('/auth', {
        url: 'auth',
        template: template,
        controller: MyRouteController,
        
    })
    .when('/home', {
        url: 'home',
        template: homeTemplate,
        controller: HomeRouteController
    })
    .otherwise({redirectTo: '/auth'});
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $locationProvider.html5Mode(true);

};

AppConfig.$inject = ['$routeProvider', '$locationProvider'];