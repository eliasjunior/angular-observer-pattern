function parentComponent(messageService, $timeout) {
    // short delay to show the message
    const notification = {
        message: 'Hello Angular', 
        type: 'danger'
    };
    // simulating ajax call request
    $timeout(() => messageService
        .fireNotification(notification), 500);	
}
angular
    .module('app')
    .component('parentComponent', {
        template: '<message-alert></message-alert>',
        controller: parentComponent,
        controllerAs: 'vm'
    });