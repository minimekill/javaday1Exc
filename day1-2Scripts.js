
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}


var sub = function (n1, n2) {
    return n1 - n2
}


var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

console.log(add(1, 2));
//3 is being logged to the console

console.log(add);
//add is an object now which has a funtion. [Function: add] is being logged because that is the object!
console.log(add(1, 2, 3));
//it logs 3, the third input is ignored since the method only has 2 inputs.
console.log(add(1));
//it logs Nan, not a number, we didnt put in 2 inputs wich the method requires.
console.log(cb(3, 3, add));
//it logs Result from the two numbers: 3 + 3 = 6;
console.log(cb(4, 3, sub));
//it logs Result from the two numbers: 4 + 3 = 1;
//console.log(cb(3,3,add()));
//it wont log anyting, we are giving add() as a callback function. not only arent we supplying it with inputs,
//but we need to give the cb method an object not a function.
console.log(cb(3, "hh", add));
//we are giving it a String instead of a number, it logs 3+hh = 3hh, my guess was we would get "NaN" but javascript
//just throws everything together it seems!.


try {
    console.log(cb(3, 3, add()));

} catch (e) {
    if (typeof n1 === "number") {
        console.log("parameter one was not a number");
    }
    if (typeof callback === "object") {
        console.log("parameter callback was not an object!");
    }
}

function mul(n1, n2) {
    return n1 * n2;
}
cb(2, 2, mul);

var val = cb(4, 2, function (n1, n2) { return n1 / n2; })
console.log(val);



//Callbacks
var arr = ["lars", "jan", "peter", "bo", "frederik"];
var arr1 = arr.filter(function (element) { return element.length > 3; });

console.log("første array");
arr.forEach(function (element) { console.log(element) });
console.log("andet array");
arr1.forEach(function (element) { console.log(element) });

arr1UpperCase = arr1.map(function (element) { return element.charAt(0).toUpperCase() + element.slice(1, element.length) });
arr1UpperCase.forEach(function (element) { console.log(element) });



var arr = ["Lars", "Peter", "Jan", "Ian"];
/*


var body = document.getElementsByTagName("body");

function writeArray(){
    body[0].innerHTML += "<ul>" + arr.map(function(element){return "<li>"+element +"</li>";}) + "</ul>" ;


}
writeArray();

*/
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newCars = cars.filter(function (element) { return element.year >= 1999 });
newCars.forEach(function (element) { console.log(element.id); });

var volvoCars = cars.filter(function (element) { return element.model === "Volvo"; });
volvoCars.forEach(function (element) { console.log(element.id); });

var cheapCars = cars.filter(function (element) { return element.price <= 5000 });
cheapCars.forEach(function (element) { console.log(element.id) });


function getNewCars(array) {

    var newCars = array.filter(function (element) { return element.year >= 1999 });
    newCars.forEach(function (element) { console.log(element.id); });
    return newCars;

}

function getVolvos(array) {

    var volvoCars = array.filter(function (element) { return element.model === "Volvo"; });
    volvoCars.forEach(function (element) { console.log(element.id); });
    return volvoCars;
}

function getCheapCars(array) {
    var cheapCars = array.filter(function (element) { return element.price <= 5000 });
    cheapCars.forEach(function (element) { console.log(element.id) });
    return cheapCars;
}
//one function where filter specifies what array of cars u need.
function getCars(array, filter) {
    if (filter === price) {
        function getCheapCars(array) {
            var cheapCars = array.filter(function (element) { return element.price <= 5000 });
            cheapCars.forEach(function (element) { console.log(element.id) });
            return cheapCars;
        }
    } else if (filter === year) {
        function getNewCars(array) {

            var newCars = array.filter(function (element) { return element.year >= 1999 });
            newCars.forEach(function (element) { console.log(element.id); });
            return newCars;

        }
    } else if (filter === brand) {
        function getVolvos(array) {

            var volvoCars = array.filter(function (element) { return element.model === "Volvo"; });
            volvoCars.forEach(function (element) { console.log(element.id); });
            return volvoCars;
        }
    }
}



//Asynchronous Callbacks
//the order is aaaa ddddd fffff eeeee bbbbb    since the fist 3 has no delay put on them they are logged after each other
//eee and bbb however is on a delay.
/*
var msgPrinter = function(msg,delay){
    setTimeout(function(){
      console.log(msg);
    },delay);
  };
  console.log("aaaaaaaaaa");
  msgPrinter ("bbbbbbbbbb",2000);
  console.log("dddddddddd");
  msgPrinter ("eeeeeeeeee",1000);
  console.log("ffffffffff");
  
//this and constructor functions 
*/
/*
function Person(name){
    this.name = name;
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  //Explain this:  this. refers to the innerfunctions this that is undefined at this point
      console.log("I'm global: "+ name);  //no longer using this, so name is now from the upper function which is defined.
    },2000);
  }
  Person("Kurt Wonnegut");

  var p = new Person("Kurt Wonnegut");
  */
//3) the fix
function Person1(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);
    }, 2000);
}

function Person2(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);
    }.bind(this), 2000);
}

var person = Person2("Peter");

// 4)

var greeter = function () {
    console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);
// i UNDerStaANdd !!!

// JavaScript Objects
var person = { name: "hans", birthday: "123", hobby: "driving", age: 5 };

for (prop in person) {
    console.log(person[prop]);
}
person.death = true;



function constructor() {
    var person = { name: "hans", birthday: "123", hobby: "driving", age: 5 };
    function getPerson(name) {
        return person.name === name;
    }
}











