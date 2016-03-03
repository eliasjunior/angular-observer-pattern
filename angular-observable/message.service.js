/**
 * Created by eliasmj on 11/01/2016.
 */
(function () {
    'use strict';
    angular.module("app").factory("messageService", messageService);

    function messageService() {

        var
         
          subscribeObj = {
            listSubscribers : [],
            alert : {},
          }

        var publicAccess = {
            addSubscriber : addSubscriber,
            fire : fire
        };

        function addSubscriber(newSubscriber) {
            if(newSubscriber) {
                subscribeObj.listSubscribers.push(newSubscriber);
            }
        }

        function fire(alertParam) {
            
            angular.forEach(subscribeObj.listSubscribers, function(subscribeItemCallBack) {

                subscribeItemCallBack(alertParam);

            });

        }

        return publicAccess;
    }
})();
