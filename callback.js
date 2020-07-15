function sayHello(){
    console.log('Hello');
}

// sayHello();

var sayBye = function(name){
    console.log('Bye' + ',' + name);
}

// sayBye();

// Callback Function
function callFunction(fun,name){
    fun(name);
}

callFunction(sayBye, 'Bob');