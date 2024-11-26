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


variables
are containers for solving informstion or Data

example :

var a = 10
var b = 20
console.log (a+b)

in this above program a and b are variables , 10 and 20 are integer Data

javascript variables can be declare in 3 ways 

1.using var
2.using let
3.using const

var a = 20
console.log(a)

let a = 20
console.log(a)

const a = 20
console.log(a)

let = local scope
var = global scope

let can be only define the particular space example

{
    let a = 20;
}
console.log(a)  //it will show error

if we put 
{
    let a = 20;
    console.log(a)  // it will show 20
}

and the variables can be declare any were in the function

const :

const means the values can not be change 

example :

const a = 10
a = 20
console.log(a)  // it will show error

create a variable name "price" and set it to a specific price value?
create a variable name "product" and set it to a specific product?
what is the total price of the product including the tax?

var price = 1000
var product = "skincare"
var tax = 25
console.log(product)
var total = price + tax
console.log(total)

declare a variable named "fruitname"
declare a variable name "count"
decclare a variable name "price" and set it to the price of  the fruit
declare a variable named "total" and calculate it by multipllying the "count" by the "price"
print the name of the "fruit"
print the total price of the "fruit"

var fruitName = "apple"
var count = 10
var price = 20
var total = count * price
console.log(fruitName)
console.log(total)

output:
apple
200

javascript keywords:

javascript has set of reserved keywords that have predefined meanings and cannot be used as identifiers 
(variable name , function name , etc...)

keywords                description

var                    declare variables
let                    declare block of variable
const                  declare a block const
if                     marks a block of statements to be executed on a condition
switch                 marks a block of statements to be executed in different cases
for                    mark a blook of statements to be executed in a loop
function               declare a function
return                 exit the function

comments:

javascript comments can be used to explain javascript code and makeit more readable

types:

1. single line comments
2. multi line comments


javascript operators

javascript provides various operators that perform operations on values or variables. these operators
can be categorized into different types based on their functionality.Data

Types of operators:

1. arithmetic operators (+, -, *, /, %, **)
2. assignment operators (=, +=, -=, *=, /=, %=, **)
3. comparison operators (>, <, >=, <=, ===, !==)
4. logical operators (&&, ||, !)
5. bitwise operators (&, |, ~, ^, <<, >>)
6. type operators (typeof, instanceof)
7. conditional (ternary) operators (? :)

increment operators:

the increment operator (++) is an arithmetic  operator in javascript that is used to increment the value
of a variable by 1..it can be used in two different ways.

pre increment

let x = 5;
let y = ++x;
console.log(x);
console.log(y);

example:
a = 10;
let b = ++a;
console.log(b);
console.log(a);
output 6

pre decrement

let x = 5;
ley y = --x;
console.log (x);
console.log(y);

example:
a = 10;
let b = --a;
console.log(b);
console.log(a);
output 6

data types:

in programming , a data type is a classificaton or categorization of a value that determines that kind
of operation that can be performed on it and the storage format used to represent it in memory.
each programming language has its own set of data types, and understanding them is essential for working 
with variables and performing operation on data.

var a = 10;
console.log(typeof (a)); // output: number

typeof datatype is used to determine the type of operation that can be performed on it and the storage 
format used to represent it in memory.

var a = "apple";
console.log(typeof (a)); 

types of datatype are

1. primitive data types:

   - number (integer, float, decimal)
   - string (string with characters and values separated by spaces and commas between them)
   - boolean (true or false)
   - undefined (value is not defined)
   - null (value is empty)

2. non primitive data types:

   - object (used to store collections of data)
   - Array  (used to store collections of data)

var a = null;
console.log(a);

var a = true
console.log(a)

output true

javascript functions:

A javascript function ia a block of code design to perform perticular task

a javascript function is executed when something invokes it (calls it).

syntax:

function function name (){
    body
}

example:

function hello() {
    console.log("hello world!");
}

hello()

var a = 10
var b = 20
console.log(a+b)

function  myName(){
    console.log("sain")
}

myName() 

function samsung(){
    console.log("this is samsung phone")
}

function iphone() {
    console.log("this is iphone")
}

function oppo() {
    console.log("this is oppo")
}

function redmi() {
    console.log("this is redmi")
}

samsung()
iphone()
oppo()
redmi()


excercise:

create two variables a and b.
create a function called add
this function should print addition of two numbers.


function add() {
    let a = 20;
    let b = 30;
    console.log(a+b);
}
add()


create a variable called factor, fplayer , fmovie
create a function called favourite()
everytime you call this function , this function should return the following output
-favourite actor: kamal
-favourite player: dhoni
-favourite movie: anbe sivam

function favourite() {
    var factor = "kamal"
    var fplayer = "dhoni"
    var fmovie = "anbe sivam"

    console.log("favourite actor:" + factor)
    console.log("favourite player:" + fplayer)
    console.log("favourite movie:" + fmovie)
    
}

favourite()

parameters

in javascript the term "parameter" typically refers to thevariables or placeholders that you define when
declaring a function.these parameters serve as inputs to the function and allow you to pass data into the 
function when u call it.

example:
 function add(a,b) {
    console.log(a+b)
 }

 add(20,30)

 
 excercise:
 -create a function called area()
 -this function should get 2 values as parameter(length, breath)
 -pass two values to the function and print the result

 function area(length, breath) {
    console.log(length*breath)
 }

 area(10,5)


 return type:
  
 in javascript, the return keyword is used within a function to specify the value that the function should produce as 
 its result or return to the caller.when a function is executed and encounters a return statement, it immediately stop 
 executing and return the specified value to the calling code.Here how the return keyword works.

 function myName(){
    return "sain"
 }
 
var a = myName()
console.log(a)

create a function called add which should take 2 parameter a and b and it should return te addition
of two variables.

function add(a,b) {
    return a+b
}

var result = add(10,40)
console.log(add)


conditional statements:

if else

if(condition){
    //code to be executed if the condition is true
}else{
    //code to be executed if the condition is false
}

example:

if(true) {
    console.log("if is working")
}else{
    console.log("else is working")
}
hhhhhhhhhhhhhhgggggggttttttttttttttttttiuu
1.is it rainning outside?
 -if the answer is "yes" print "take an umbrella"
 -if the answer is "no" print "enjoy the sunshine"

var rain = true

if(rain) {
    console.log("take an umbrella..!")
}else{
    console.log("enjoy the sunshine")
}

2. did you finish your homework?
  -if the answer is "yes" print "Great job!"
  -if the answer is no print "finish your homework before playing"

  var homework = false

  if(homework){
    console.log("Great job!")
  }else {
    console.log("finish your homework before playing")
  }

  3. are there any cookie left?
   - if the answer is "yes" print "would you like a cookie"
   - if the answer is "no" print "time to bake more cookies"

var cookies = true

if (cookies) {
    console.log("would you like a cookie")
}else{
    console.log("time to bake more cookies")
}

LOGICAL AND
 console.log(true && true)
 console.log(true && false)
 
 LOGICAL OR
 console.log(true || false)

 LOGICAL NOT 
 console.log(!true)

1. what is the color of the traffic light?
 - if the light is "red" print "stop"
 - if the light is "yellow" print "get ready"
 - if the light is "green" print "go"

 var color = "Green"

 if(color == "red") {
    console.log("stop")
 }

if(color == "Yellow") {
    console.log("get ready")
}
if( color == "Green") {
    console.log("go")
}

2. what is the season of the year?
 -if the answer is "spring" print "enjoy the blooming flowers"
 -if the answer is "summer" print "have a fun in the sun"
 -if the answer is "autumn" or "fall" print "admire the colorful leaves"
 -if the answer is "winter" print "bundle up and stay warm"

 var season = "spring"

 if(season == "spring") {
    console.log("enjoy the blooming flowers")
 }
 if(season == "summer") {
    console.log("have a fun in the sun")
 }
 if(season == "autumn") {
    console.log("admire the colorful leaves")
 }
 if(season == "winter") {
    console.log("bundle up and stay warm")
 }

 3.what is the score in the game?
 -if the score is less than 50, print "you need to improve"
 -if the score is between 50 and 70, print "good job"
 -if the score is greater than 70, print "excellent performance"

 var score = 20
 if(score <= 50) {
    console.log("you need to improve")
 }
 else if(score>50 && score <= 70){
    console.log("great job")
 }
else if(score > 70){
    console.log("excellent performance")
 }
 
 4.is the number even or odd
  -if the number is even  print "the number is even"
  -if the number is odd  print "the number is odd"

  var number = 20
  
  if(number % 2 == 0) {
    console.log("the number is even")
  }else{
    console.log("the number is odd")
  }

  5.is the character a vowel or a consonant?
   -if the character is vowel(a,e,i,o,u) print "its vowel"
   -if the character is consonant print "its consonant"

   var character = "a"

   if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
    console.log("its vowel")
   }else{
    console.log("its consonant")
   }

   for loop:
   in javascript forloop is a controlflow statement used to repeatedly execute a block of code based on
   a specific condition. the general syntax of a for loop in javascriptis as follow:

   for(initialization ; condition ; iteration) {
    //code to be executed in each iteration
   }

   example:
   initialization => start
   condition => 1<=5
   iteration => increment i by 1

   for(count = 1; count <=10; count = count+1){
    console.log("shifa")
   }

   excercise:
   
   print all the number from 1 to 10 using for loop

   for( i=1; i<=10; i++){
    console.log(i)
   }
   
   print number from 1 to 10, but increment by 2 in each step using for loop
   
   for(i=1; i<=10; i=i+2){
    console.log(i)
   }

   for numbers from 1 to 10, in reverse order
   
   for(i=10; i>=1; i=i-1){
    console.log(i)
   }

   print only the even number from 1 to 10

   for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
