                                    // execution context 
                                
// in javascript everything is happen inside the execution context
// java script is a synchronous single threaded language


// 2 components:

// variable environments:

// *memory execution
// -key value
// -functrion {.....}

// thread of execution:
// *code execution
// code will execute one line at a Time


// call stack  (various names)

// 1.execution context stack 
// 2.program stack
// 3.control stack
// 4.run time stack
// 5.machine stack

var x = 7;
function getName(){
    console.log("shifa gafoor");
}

console.log(getName);
// getName();
// console.log(x);


// functions

var x = 1;
a();
b();
console.log(x);

function a () {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}


