/////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956); //<---- not going to work because it is not function declaration, but it is function expression.
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age); //if we console.log without defining after the age variable, it will not work. In this case it will print imdefined.
var age = 23;

function foo() {
    console.log(age); // if we do not define 'age' here, the first log will print '23', otherwise it will 'hoist' the variable, and it will print undefined fist.
    var age = 65; // this makes age a local variable, even if this name exists in the global scope!!! <---------
    console.log(age);
}
foo();
console.log(age); // it will print the global context value of 'age', 23 and not 65.



/////////////////////////////////////
// Lecture: Scoping

// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
