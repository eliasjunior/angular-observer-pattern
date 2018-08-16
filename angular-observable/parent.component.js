function parentComponent(messageService, $timeout) {
    // short delay to show the message
    const notification = {
        message: 'Hello Angular', 
        type: 'danger'
    };
	$timeout(() => messageService.fire(notification), 500);	
}
angular
    .module('app')
    .component('parentComponent', {
        template: '<message-alert></message-alert>',
        controller: parentComponent,
        controllerAs: 'vm'
    });