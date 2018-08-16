function messageService() {
    let listSubscribers = [];
    return {
        addNotificationSubscriber(newSubscriber) {
            if(newSubscriber) {
                listSubscribers.push(newSubscriber);
            }
        },
        fireNotification(alertParam) {
            angular.forEach(listSubscribers, function(subscribeItemCallBack) {
                subscribeItemCallBack(alertParam);
            });
        },
        unSubscribeNotification(fn) {
            listSubscribers = listSubscribers.filter(fnItem => fnItem !== fn);
        }
    };
}
angular
    .module("app")
    .factory("messageService", messageService);