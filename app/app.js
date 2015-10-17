var myApp = angular.module('laundryApp',['firebase','ngRoute'])

// var firebase = new Firebase("https://blinding-heat-2671.firebaseio.com/");

// phonecatApp.config(['$routeProvider',
//   function($routeProvider)
myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'components/buildings/buildings.html',
        // controller: 'BuildingsController'
    })

    .when('/:buildingId', {
        templateUrl: 'components/machines/machines.html'
        // controller: 'MachinesController'
    })

    .when('/:buildingId/:machineId', {
        templateUrl: 'components/machines/machine.html'
        // controller: 'MachinesController'
    })

    .otherwise({
        redirectTo: '/buildings'
    });
    // $locationProvider.html5Mode(true);

}]);

myApp.controller('BuildingsController', ['$scope','$firebaseArray',function($scope, $firebaseArray){
    $scope.buildings = ['i am a bulding'];
}])    

myApp.controller('MachinesController', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
    
    // $scope.messages = $firebaseArray(ref);
    $scope.machines = [{name: 'washer'}];

    // todoList.archive = function() {
    //   var oldTodos = todoList.todos;
    //   todoList.todos = [];
    //   angular.forEach(oldTodos, function(todo) {
    //     if (!todo.done) todoList.todos.push(todo);
    //   });
    // };
}]);

