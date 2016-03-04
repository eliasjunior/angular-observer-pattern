
(function () {
    'use strict';
	angular.module("app", [])
		.controller('myController', function(){

			var vm = this;

			vm.view = {};

		    vm.case1 = function() {

		        vm.view = getView('case1');
		    }

		    vm.case2 = function() {
		         vm.view = getView('case2');
		    }

		    vm.case3 = function() {
		         vm.view = getView('case3');
		    }

		    function getView(viewCase) {

		    	console.log("CASE", viewCase)		

		        var defaultView = {
		            title : 'Default Title',
		            templateUrl : 'templateDefault.html',
		            showFirstBlock : true
		        }

		        //LEVEL 1
		        vm.view.case1 = Object.create(defaultView);

		        //LEVEL 2
		        vm.view.case2 = Object.create(defaultView);
		        vm.view.case2.showFirstBlock = false;
		        vm.view.case2.showList = true;
		        vm.view.case2.templateUrl = 'template-case2.html?=cache' + new Date();
		        vm.view.case2.title = "Case 2";

		        vm.view.case2.callCase2 = function() {
		            console.log("function of case 2")
		        }

		        vm.view.case3 = Object.create(vm.view.case2)
		        vm.view.case3.templateUrl = 'template-case3.html?cache='+ new Date();
		        vm.view.case3.title = "Case 3";

		        vm.view.case3.callCase3 = function() {
		            console.log("function of case 3!!")
		        }
		       
		        return vm.view[viewCase];
		    }

		    function init() {

				vm.view = getView('case1')

		    }

    		init();

		});

})();
