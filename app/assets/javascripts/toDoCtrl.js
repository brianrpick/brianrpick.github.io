(function() {
  "use strict"; 

  angular.module("app").controller("pageCtrl", function($scope) {
    $scope.incomplete = [];
    $scope.tasks = [];

    $scope.addTask = function(newTasktext) {
      if (newTasktext != null) {
        var task = {
          text: newTasktext,
          completed: false
        }
      }
      else {
        alert("Please enter a task");
      }
      $scope.tasks.push(task);
      $scope.newTasktext = null;
      $scope.tasksCompleted();

    }

    $scope.allDone = function() {
      var tempTask = [];
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === false) {
          tempTask.push($scope.tasks[i]);
        }
      }
      $scope.tasks = tempTask;
    }

    $scope.showUp = function(task) {
      if (task.completed) {
        task.completed = false;
      }
      else {
        task.completed = true;
      }
      $scope.tasksCompleted();
    }

    $scope.tasksCompleted = function() {
      $scope.incomplete = [];
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === false) {
          $scope.incomplete.push($scope.tasks[i]);
        }
      }
    }
    window.$scope = $scope;
  });
})();