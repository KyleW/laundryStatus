var myApp = angular.module('laundryApp',['firebase'])
myApp.controller('BuildingsController', ['$scope','$firebaseArray',function($scope, $firebaseArray){
    $scope.buildings = []
}])    
myApp.controller('MachinesController', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
    var firebase = new Firebase("https://blinding-heat-2671.firebaseio.com/");
    // $scope.messages = $firebaseArray(ref);
    this.machines = [{name: 'washer'}];


// var todoList = this;
// todoList.todos = [
//   {text:'learn angular', done:true},
//   {text:'build an angular app', done:false}];

// todoList.addTodo = function() {
//   todoList.todos.push({text:todoList.todoText, done:false});
//   todoList.todoText = '';
// };

// todoList.remaining = function() {
//   var count = 0;
//   angular.forEach(todoList.todos, function(todo) {
//     count += todo.done ? 0 : 1;
//   });
//   return count;
// };

// todoList.archive = function() {
//   var oldTodos = todoList.todos;
//   todoList.todos = [];
//   angular.forEach(oldTodos, function(todo) {
//     if (!todo.done) todoList.todos.push(todo);
//   });
// };
}]);


// angular.module('laundryApp',[])
// .controller('MachinesListController', ['', function(){

// }])