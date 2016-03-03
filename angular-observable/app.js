
(function () {
    'use strict';
	angular.module("app", [])

		.controller('myController', ['messageService', '$timeout', function(messageService, $timeout){


			//small delay to show the message
			$timeout(function(){
				messageService.fire({message:"Hello Angular", type:'danger'})
			}, 1000)	

		}])

})();
