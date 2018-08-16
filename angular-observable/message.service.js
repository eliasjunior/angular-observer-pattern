function messageService() {
    let listSubscribers = [];
    return {
        addSubscriber(newSubscriber) {
            if(newSubscriber) {
                listSubscribers.push(newSubscriber);
            }
        },
        fire(alertParam) {
            angular.forEach(listSubscribers, function(subscribeItemCallBack) {
                subscribeItemCallBack(alertParam);
            });
        },
        unsubscribe(fn) {
            listSubscribers = listSubscribers.filter(fnItem => fnItem !== fn);
        }
    };
}
angular
    .module("app")
    .factory("messageService", messageService);