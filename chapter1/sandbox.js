// for - keyword of forloop

// inside the parentheses we have there different things
//     1.initialization variables    eg:let i=0;
//       it is used for track how many times we cyclethrough 
//       the loop and how many times we run the code inside the loop.

//     2.condition          eg:i<5 , i>5 , i=5  
//       this is going to evaluate to either true or false
//       if this condition is true the we are execute the code
//       thats inside this code block if it is false then we are
//       not going the third thing over here




// let age = 25;
// let year = 2021;
// console.log(age , year)

//log console


// age = 30;
// console.log(age)

// const points = 100;
// console.log(points)

// var score = 75;
// console.log(score)


// String

// console.log('hello,world');

// let email = 'shifagafoor@gmail.com';

// string concatenation

// let firstName = 'Shifa';
// let lastName = 'Gafoor';
// let fullName = firstName + '' + lastName;
// console.log(fullName);


// getting character

// console.log(fullName[2]);

// string length

// console.log(fullName.length);

// string method

// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result , fullName);


// let index = email.indexOf('@');
// console.log(index);


// let email = 'shifagafoorncas@gmail.com'
// let result = email.slice(0,10);
// console.log(result);



// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi)


// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// concatenation way 

// let ninjas = ['shifa' , 'deepa' , 'liya'];

// console.log(ninjas[0]);

// let ages = [20,25,30,35];
// console.log(ages[2]);


                 // for loop

// for(let i=0; i<5; i++){
//     console.log('in loop:',i)
// }
// console.log('loop finished');

// const names =  ['shaun', 'mario' , 'luigi'];
// for(let i=0; i<names.length;i++){
//        // console.log(names[i]);
//        let html = `<div>${names[i]}</div>`;
//        console.log(html);
// }



              //  while loop 

// const names = ['shaun', 'mario', 'lugi'];
// let i = 0;
// while(i<5){
//        console.log('in loop: ',i);
//        i++;
// }

// let i = 0;
// while(i < names.length){
//        console.log(names[i]);
//        i++;
// }

              // do while loop

              
// let i = 5;

// do{
//        console.log('val of i is:', i);
//        i++;
// }while(i < 5);


              // if statement 

// const age = 25;
// if(age > 20){
//        console.log('you are over 20 years old');
// }

// const ninjas = ['shifa','deepa','liya'];

// if(ninjas.length > 3){
//        console.log("that's a lot of ninjas");
// }

// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//        console.log('that password is might strong')
// }else if(password.lenght >= 8 || password.includes('@') && password.lenght > 5){
//        console.log('that password is strong enough!');

// } else{
//   console.log(' password is strong enough');
// }



              //    logical or not (!)


// let user = false;
// if(!user){
//        console.log('your must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);



              //  break and continue 


// const score = [50,25,0,30,100,20,10];
// for(let i=0; i < score.length; i++){
//        console.log('you score:',score[i]);

//        if(score[i]===0){
//               continue;
//        }

//        if(score[i]===100){
//               console.log('congrats, you got the top score!');
//               break;
//        }
// }


              // switch statement

// const grade ='c';

// switch(grade){

//        case 'A':
//               console.log('you got an A!');
//        break;       
//        case 'B':
//               console.log('you got an B!');
//        break;
//        case 'c':
//               console.log('you got an C!');
//        break;
//        case 'D':
//               console.log('you got an D!');
//        break;
//        case 'E':
//               console.log('you got an E!');
//        break;
//        default:
//               console.log('not a valid grade');
// }



        //  variables & block 

// let age = 30;


// if(true){
//     age = 40;
//     console.log('inside 1st code block:', age);
// }

// console.log('outside code block:',age);



                // functions

// function store(){
//     console.log('hello there');
// }

//                 function expression
            

// greet()
// greet()
// greet()

// store()
// store()
// store()


    // arguments &  parameters

// const speak = function(name , time){
//     console.log('good day $(time) ${name}');
// };

// speak('mario', 'morning');



// var myName = "beau"

// myName = 8

// let ourName = "freecodecamp"

// const pi = 3.14

// var a;
// var b = 2;

// console.log(a)

// a = 7;

// b = a;

// console.log(a)


                //  initiallizing these three variable

// var a = 5;
// var b = 10;
// var c = "I am a";


                // Do not change code below these line


// a = a + 1;
// b = b + 5;
// c = c + "string!";


                // Declaration


// var studlyCapVar;

// var properCamelCase;

// var tITLEcASEoVER;


                // assignment

// studlyCapVar = 10;

// PRoPerCAmeLCAse = "A String";

// tITLEcASEoVER = 9000; 

            //    adding number

var sum = 10 + 10;

console.log(sum)

            //    substracting numbers


var difference = 45 - 33;
console.log(difference)


               // multiplying numbers


var product = 8 * 10;
console.log(product)

               // dividing numbers

var quotient = 66 / 2;
console.log(quotient)

                // incrementing numbers

var myVar = 87;

myVar = myVar + 1; 

console.log(myVar)

                //   decrementing numbers

var myVar = 41;

myVar = myVar - 1; 
                
console.log(myVar)

                    // decimal numbers

var ourDecimal = 5.7;

var myDecimal = 0.009;

console.log(myDecimal)

                //    multiple decimals

var product = 2.0 * 2.5;

console.log(product)

                // devide decimals

var quotient = 4.4 /2.0;
console.log(quotient)


               // finding a remainder

var remainder;

remainder = 11 % 3;

console.log(remainder)


           // compound assignment with augmented addition

var a = 3;
var b = 17;
var c = 12;


a += 12;
b += 9;
c += 7;

console.log(a)
console.log(c)

          // compound assignment with augmented subracion


var a = 11;
var b = 9;
var c = 3;


a -= 6;
b -= 15;
c -= 1;

console.log(a)
console.log(c)

         // compound assignment with augmented multiplication


var a = 5;
var b = 12;
var c = 4.6;
         
         
a *= 5;
b *= 3;
c *= 10;
         
console.log(a)
console.log(c)

        // compound assignment with augmentd division


var a = 48;
var b = 108;
var c = 33;
         
         
a /= 12;
b /= 4;
c /= 11;
         
console.log(a)
console.log(c)


                // declare string variables

var firstName = "Alan";

var lastName = "Turing";

var myFirstName = "Beau";

var myLatName = "carnes";

console.log(firstName)

console.log(myFirstName)


              // escape sequences in string

// code output

// \''   single quote

// \""   double quote

// \\    backslash

// \n    newlinw

// \r   carriage return

// \t   tab 

// \b   backspace

// \f   form feed

            // concatenation SVG TransformListing with plus operator

var ourStr = "I come first." + "I come second.";

var myStr = "This isthe start." + "This is the end."

console.log(myStr)

console.log(ourStr)


var ourStr = "I come first.";

ourStr += "I come second.";

var myStr = "This is the first sentance.";

myStr += "This is the second sentance.";

console.log(myStr)


              // constructing string with variables


var ourName = " freeCodeCamp";

var myStr = " Hello, our name is " + ourName + " and i am well!";

console.log(myStr)


        // appending variabes to string

var anAdjective = "awesome!";

var ourStr = "freeCodeCamp";

ourStr += anAdjective;

var someAdjective = "worthwhile"

var mystr = "Learning to code is";

myStr += someAdjective;

console.log(myStr)


         // find length of string


var firstNameLength = 0;

var firstName =  "Ada";

firstNameLength = firstName.length;

var lastNameLenght = 0;

var lastName = "Lovelace";

lastNameLenght = lastName.length;

console.log(lastNameLenght)


   // bracket notation to find first character in string


   var firstLetterOfFirstName = ""

   var firstName = "Ada";
   
   firstLetterOfLastName = firstName[0];

   var firstLetterOfLastName = "";

   var lastName = "Lovelace";

   firstLetterOfLastName = lastName[0];

   console.log(firstLetterOfLastName)



               //    string immutability



var myStr = "Jello world";

myStr = "Hello world";

console.log(myStr)

   // bracket notation to find nth character in string


// var firstName = 'Ada';

// var secondLetterOfFirstName = firstName[1];

// var lastName = "Lovelace";

// var thirdLetterOfLastName = LastName[2];



// bracket notation to find nth-to-last character in string

// var firstName = "Ada";

// var thirdToLastLetterOfFirstName = firstNmae[firstName.len]


        //  wordblank


// function worldBlanks(myNoun, myAdjective, myVerb, myAdverb){
//         var result = "";
//         result += "the" + myAdjective + myNoun + myVerb + "to start the store"
        
//         return result;
// }

// console.log(worldBlanks("dog", "big" , "ran" , "quickly"));

// console.log(worldBlanks("bike", "slow" , "flew" , "slowly"));


         // stores multiple values with arrays


// var ourArray = ["john" , 23];

// var myArray = ["quincy", 1];


                //nested array


// var ourArray = [["the universe", 42], ["everything", 101010]];

// var myArray = [["Bulls", 23], ["white sox"]];


                // Access array data with indexes

// var ourArray = [50,60,70];

// var ourArray = ourArray[0];

// var myArray = [myArray[0]];

// console.log(myDay)


              // modify array data with indexes



var ourArray = [18,64,99];

ourArray = 45;

var myArray = [18,64,99];

myArray[0] = 45;

console.log(myArray)


      // access multi-dimensional arrays with indexes


var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12], 12, 14]];

var myData = myArray[2][1];

console.log(myData)


      // manipulate arrays with PushManager()


var ourArray = ["stimpson", "j", "cat"];

ourArray.push(["happy", "joy"]);

var myArray = [["john", 23], ["cat", 2]];

myArray.push(["dog", 3])

console.log(myArray)

        // manipulate arrays with PopStateEvent()


var ourArray = [1,2,3];

var removedFromOurArray = ourArray.pop();

var myArray = [["john", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

console.log(myArray)


        // manipulate arrays with shift()

// var ourArray = ["stimpson", "j", [cat]];

// var removedFromOurArray = ourArray.shift();

// var myArray = [["john", 23], ["dog", 3]];

// var removedFromMyArray = myArray.shift();

// console.log(myArray)


        // manipulate arrays with unshift()


var ourArray = ["stimpson", "j", "cat"];

ourArray.shift();

ourArray.unshift("Happy");

var myArray = [["john", 23], ["dog", 3]];

let aeeee=[0,9,9]
// console.log("areretrttrt",aeeee)
// console.log(...aeeee)

myArray.shift();

myArray.unshift(["paul", 35]);

console.log(myArray)


              // shopping list


var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2],["eggs", 12]]

console.log(myList)

        // write reusable code with functions


function ourReusableFunction(){
        console.log("heyya, world");
}

ourReusableFunction();

function reusableFunction(){
        console.log("hi, world");
}

reusableFunction()


        // passing values to functions with arguments


// function ourFunctionWithArgs(a,b){
//         console.log(a-b);
// }

// ourFunctionWithArgs(a,b){
//         console.log(a+b);
// }

        // Global scope and function

// var myGlobal = 10;

// function fun1(){
//         oopsGlobal = 5;
// }

// function fun2(){
//         var output = "";
//         if(typeof myGlobal != "undefined"){
//                 output += "myGlobal:" + myGlobal;
//         }
//         if(typeof oopsGlobal != "undefined"){
//                 output += "oopsGobal:" + oopsGlobal;
//         }
//         console.log(output);
// }
// fun1();
// fun2();


        // local scope and functions


function myLocalscope(){
        var myVar = 5;
        console.log(myVar);
}
myLocalscope();

                // global vs .local scope function


// var outerWear = "T-Shirt";

// function myOutfit(){
        
//         outerWear = "Sweater";

//         return outerWear;
// }
// console.log(myOutfit());
// console.log(outerWear());


        // return a value from a function with return


function minusSeven(num){
        return num -7;
}

console.log(minusSeven(10));

function timesFive(num){
        return num * 5;
}

      // understanding underfined value returned from a function


var sum = 0;
function addThree(){
        sum = sum + 3;
}

function addFive(){
        sum += 5;
}

                // assignment with a returned value


var changed =0;

function change(num){
        return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num){
        return (num + 3)/5;
}

processed = processArg(7);

                // stand in line\

function nextInline(arr, item){
        arr.push(item);
        return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

                // Boolean values


// function welcomeToBooleans(){
//         return false;
// }

//                 // use conditional logic with if statement

// function ourTrueOrFalse(isItTrue){
//         if (isItTrue){
//                 return " yes, its true";
//         }
//         return "No, its false";
// }

// function ourTrueOrFalse(wasThatTrue){
//         if (wasThatTrue) {
//                 return "Yes, that was true"
//         }

//         return "no, that was false";
// }

// console.log(trueOrFalse(true));



                // comparison with the equality operator


function testEqual(val) {
        if (val == 12) {
                return "Equal";
        }

        return "Not Equal";
}

console.log(testEqual(10));


        // comparison with the strict equality operation

function testStrict(val){
        if (val === 7){
                return "Equal";
        }

        testStrict(10);
}


                // practice comparing different values


function compareEquality(a, b) {
        if (a === b) {
                return "Equal";
        }

        return "Not Equal";
}

console.log(compareEquality(10, "10"));


        // comparsion with the inequality operator

function testNotEqual(val){
        if (val !=99) {
                return "Not Equal";
}
return "equal";
}

console.log(testNotEqual(10));

        // comparison with the strict inequality operator


function testStrictNotEqual(val) {
        
        if (val !== 17) {
                return "Not Equal";
        }
        return "Equal";
}

console.log(testStrictNotEqual(10));


        // comparisons with the logical and operator


// function testGreaterThan(val) {
//         if (val > 100)
//                 return "Over 100";
//         }
//         if (val > 10) {
//                 return "10 or Under";
//         }

// console.log(testGreaterThan(10));

        // comparison with the greater than or equal to operator

function testGreaterOrEqual(val) {
        if (val >= 20) {
                return "10 or Over";
        }

        if (val >= 10 ) {
                return "10 or Over";
        }
        return "Less than 10";
}

console.log(testGreaterOrEqual(10)); 


        // comparison with the less than operator

function testLessThan(val) {
        if (val < 25) {
                return "under 25";
        }
        return "55 over"
}
testLessThan(99)
console.log(testLessThan(7))


        // comparisons with the logical  or operator 

function testLogicalOr(val){

        if (val < 10 || val > 2) {
                return "outside";
        }

        return "inside";
}

testLogicalOr(15);

                // else statement

function testElse (val) {
        var result = "";

if (val > 5){
        result = "Bigger than 5";

}else{
        result = "5 or smaller";

}
return result;

}

console.log(testElse(6))


                // Else if statement

function testElseIf(val) {
        if (val > 10) {
                return "Greater than 10";
        } else if (val < 5) {
                return "smaler than 5";
        }else {
                return "Between 5 and 10"
        }
}

testElseIf(7);
console.log(testElseIf(7));


                // logical order in if else statements

// function testSize(num) {
//         if(num < 5) {
//                 return "tiny"
//         } else if (num < 10) {
//                 return "small"
//         } else if (num < 15) {
//                 return "medium"
//         } else if (num < 20){
//                 return "large"
//         } else{
//                 return "huge"
//         }
// }

// console.log(testSize(7));


                // record collection

// var collection = {
//         "2548": {
//                 "album" : "slippery when wet",
//                 "artist": "bon jovi",
//                 "tracks": [
//                         "let it rock",
//                         "you give love a bad name"
//                 ]
//         };
//         "2468" : {
//                 "album" : "1999",
//                 "artist": "prince",
//                 "tracks": [
//                         "1999",
//                         "little red corvette"
//                 ]
//         },
//         "1245": {
//                 "artist":"Robert palmer",
//                 "tracks": []
//         },
//         "5439": {
//                 "ABBA gold" 
//         }
// };

// var collectioncopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//         return collection;
// }


