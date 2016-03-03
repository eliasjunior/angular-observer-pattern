/**
 * Created by eliasmj on 10/09/2015.
 *
 * Augmenting , Functions that are missing on JS Lib
 *
 */

Function.prototype.method = function(name, func) {

    //only if the method is missing, for it not mixes libraries
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Function.method(‘inherits’, function(Parent){
	this.prototype = new Parent()
      return this;
});

//return int, for not get invalid function when is not a String, also convert double to integer i.e. 1.4 = 1
Number.method("toInt", function(){
   return Math[this < 0 ? 'ceil' : 'floor'](this);
});

String.method('trim', function (  ) {
    return this.replace(/^\s+|\s+$/g, '');
});

String.method('toInt', function(){

    return Math[this < 0 ? 'ceil' : 'floor'](this);
});