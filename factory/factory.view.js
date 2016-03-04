var getView = function (viewCase) {

	var vm = this;

	var defaultView = {
		title : 'Title',
		template_1 = 'template1.html',
		showFirstBlock = true
	}

    vm.view = {};

    //LEVEL 1
    view.case1 = Object.create(defaultView);
    view.case1.showFirstBlock = true;


    //LEVEL 2
    view.case2 = Object.create(defaultView);
    view.case2.showFirstBlock = false;
    view.case2.showList = true;
    viewm.case2.addCount = function() {
    	//Do sth
    }

    view.case3 = Object.create(view.case2)
 	viewm.case2.removeCount = function() {
    	//Do sth
    }

    return view[viewCase];
}

