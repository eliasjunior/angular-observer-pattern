function myController() {
	var vm = this;
	vm.view = {};

	//simples functions to change the state	
	vm.case1 = function () {
		vm.view = getFactoryView('case1');
	}

	vm.case2 = function () {
		vm.view = getFactoryView('case2');
	}

	vm.case3 = function () {
		vm.view = getFactoryView('case3');
	}

	function getFactoryView(viewCase) {
		//Default view, components that are common between the views.	
		var defaultView = {
			title: 'Default Title',
			templateUrl: 'templateDefault.html',
			showFirstBlock: true
		}

		//CASE VIEW 1, it creates case1 inherits the atributes/methos from defaultView
		vm.view.case1 = Object.create(defaultView);

		//CASE VIEW 2 it creates case2 inherits the atributes/methos from defaultView
		vm.view.case2 = Object.create(defaultView);
		vm.view.case2.showFirstBlock = false;
		vm.view.case2.showList = true;
		vm.view.case2.templateUrl = 'template-case2.html?=cache' + new Date();
		vm.view.case2.title = "Case 2";

		vm.view.case2.callCase2 = function () {
			console.log("function of case 2")
		}

		//CASE VIEW 2
		vm.view.case3 = Object.create(vm.view.case2)
		vm.view.case3.templateUrl = 'template-case3.html?cache=' + new Date();
		vm.view.case3.title = "Case 3";

		//it creates case3 inherits the atributes/methos from defaultView and ALSO Case 2
		vm.view.case3.callCase3 = function () {
			console.log("function of case 3!!")
		}

		//Return the ideal view 
		return vm.view[viewCase];
	}

	function init() {
		vm.view = getFactoryView('case1')
	}
	init();
}
angular.module("app", [])
	.controller('myController', myController);
