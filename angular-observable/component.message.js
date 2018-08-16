function messageAlertComponent($timeout, messageService) {
    //when it loads, the component subscribes a callback 
    const vm = this;
    const notificationCallback = _notification_ => {
        vm.notification = _notification_;
        vm.style = 'alert-' + (vm.notification.type === 'danger' ? 'danger' : 'success');
    }
    messageService.addSubscriber(notificationCallback);

    vm.$onDestroy = () => {
        messageService.unsubscribe(notificationCallback);    
    };
    vm.onChangeSuccess = () => {
        vm.style = 'alert-success';
    }
    vm.onChangeAlert = () => {
        vm.style = 'alert-danger';
    }
}

angular
    .module('app')
    .component('messageAlert', {
        bindings: {
            notification: '<'
        },
        templateUrl: 'message.html',
        controller: messageAlertComponent,
        controllerAs: 'vm'
    });
    