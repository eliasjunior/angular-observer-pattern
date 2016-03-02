
(function () {
    'use strict';
	angular.module("app", [])

		.controller('myController', ['messageService', '$timeout', function(messageService, $timeout){


			$timeout(function(){
				messageService.fire({message:"Hello Angular", type:'danger'})
			}, 2000)	

		
	
		}])

})();
