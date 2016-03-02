/**
 * Created by eliasmj on 25/11/2015.
 */
(function () {
    'use strict';
    angular.module("app").directive("message", message);

  message.$inject = ['$timeout', 'messageService'];

  function message($timeout, messageService) {

      return {
          restrict : 'AE',
          templateUrl : 'message.html',

          link: function(scope) {
            
            //when it loads the directive it subscribes to the service 
            messageService.addSubscriber(function(message){

                scope.notification = message;

                //removes the mesage after 10 seconds  
                $timeout(function(){
                    scope.notification = {};
                }, 10 * 1000);

            });

          }

      }

  }

})();
