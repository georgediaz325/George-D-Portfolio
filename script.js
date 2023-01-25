/*
//alert("JS is cool");

//console.log(prompt("What country are you from?, country name:"));

//console.log(confirm("Continue learning Js?"));

//console.log("I am learnign JS");

 //let favFood = ("Pizza");
 //let favColor = ("Red");
 //let favDrink = ("Lemonade");
//const birthDay = ("04/10/2000");

 //favFood = ("Pasta");

 //console.log(favDrink);
//console.log(favFood);
//console.log(birthDay)

/* let favDrink = ("Sprite");
let favNum = 3;

let myFavs = function() {
    console.log(favDrink, favNum);
}
myFavs();

let person = {

    name: "John",
    age: 30,
}

console.log(person);


let num1 = 10;
let num2 = 20;

console.log(num1 + num2);

console.log(num1%num2);

let total = 10;
total++;
console.log(total);


// 20

let xp = 250;
xp *= 2;

console.log(xp);


let thou = 1e5;
console.log(thou);

console.log(typeof thou);


let num = 7;
let num2 = 2;
let title = "george";


let add7 = num + 7;
let multiply = num * num2;
/*let capitalize = figure out how 
to capitalize 
first letter in string



const PI = 3.14159;

console.log(PI.toFixed(3));

num2 = PI .toPrecision(3);
console.log(num2);

const lightSpeed = 186000;
console.log(lightSpeed.toExponential());



let s = 'Hello';
let d = "Hello";
let b = `Hello`;

let speech = "Martin Luther said 'I have a dream.'";
console.log(speech);

let tip = "We can escape quotes by using \\.";
console.log(tip);

 let phrase = "I am learning ";
 let phrase2 = "Javascript";
 let result = phrase + phrase2;

 console.log(result); 
 console.log(phrase.concat(phrase2));



let firstName = "George";
let course = "JavaScript";
let channel = "Dev Dreamer";

let info = `${firstName} is learning ${course} with ${channel}.`;

console.log(info);



let x = "i am watching Dev Dreamer.";
console.log(x.toUpperCase());

console.log(x.slice(14,25));



let date = new Date;
let hour = date.getHours();
let min = date.getMinutes();

console.log(date.getDate());
//here we use template literal so we can extract the values and put them in a string
console.log(`${hour}:${min}`);


console.log(date.toLocaleString('default', {weekday:'long'}));


let num1 = Math.random().toFixed(1) * 10;
let num2 = Math.random().toFixed(1) * 10;
let num3 = Math.random().toFixed(1) * 10;

console.log(num1, num2, num3);

let max = Math.max(num1, num2, num3);

console.log(max);

let x = 7; 
let y = 2;
let blah = "blah blah blah"

let add7 = x + 7;
let multiply = x * y;

let Blah = blah.charAt(0).toUpperCase()+blah.slice(1);


console.log(add7);
console.log(multiply);

console.log(Blah);



let a = 10;
let b = 15;

console.log(a > b);

console.log(a == "10");

console.log(a === "10");



let a = -1;
let b = 1;
//true 
if(a && b){
    console.log("hello");
}



let course;

console.log(course ?? "Please select a course");

let user = "employee";

if (user === "guest"){
    console.log("Login Denied");
} else if(user ==="employee"){
    console.log("Succesfully Logged in");
}

let myName = "george";
let nameLength = myName.length;

if (nameLength > 5){
    alert("More than 5");
}else if (nameLength === 5){
    alert("Exactly 5 letters");
} else {
    alert("Less then 5 letters");
}


let favFood = `wings`;

switch(true) {
    case favFood === `pizza`:
        console.log(`That's right ${favFood} is my favorite!`);
        break;

    case favFood === `wings`:
        console.log(`That's right ${favFood} is my favorite!`);
        break;

    case favFood === `pasta`:
        console.log(`That's right ${favFood} is my favorite!`);
        break;

    case favFood === `fries`:
        console.log(`That's right ${favFood} is my favorite!`);
        break;

    case favFood === `cheese`:
        console.log(`That's right ${favFood} is my favorite!`);
        break;

    default:
        console.log(`Fav food not found... I'm hungry.`);
        break;
}

let message = 1 > 10 ? `Condition is True` : `Condition is FALSE`;

console.log(message);

let time = `11:00`;

let greeting = time <`12:00` ? `Good Morning` : `Good Evening`;

console.log(greeting);



const colors = [`blue`, `green`, `red`, `purple`, `brown` ];

for (let color = 0;color < colors.length; color++ ){
    console.log(`${colors[color]} is my favorite color.`);
}



let mph = 0;

while (mph <=100){
    console.log(`The speed of the car is ${mph} MPH`);
    mph+=10 ;
}

let a = 1;
let b = 10;

do{
    console.log(a);
    a++;
} while (a <= b);



let house = {
    type: `Detatched`,
    build: `brick`,
    year: 2019,
    price: 250000,
    driveway: true
}

for (let x in house) {
    console.log(`${x}:${house[x]}`);
}


let colors = [`Red`, `Orange`, `Yellow`, `Green`, `Blue`];

for (x of colors){
    if (x ===`Green`) {
        break;
    } else { 
        console.log(`${x}`);
    }
}


let countries = [`USA`, `CANADA`,`MEXICO`];

countries[3] = `Bahamas`;

console.log(countries);

let colors = [`blue`, `red`,`green`,[`teal`,`pink`,`black`]];

console.log(colors[3][2]);


let fruits = [`apple`, `orange`, `banana`];

fruits.unshift(`cherry`, `pineapple`);
fruits.push(`plum`, `grapes`);

fruits.splice(3,1, `lemon`);
fruits.sort();
console.log(fruits);



const fruits = [`apple`,`orange`,`banana`];

fruits.forEach(
    function(value,index,array){
        alert(`${index} - ${value}`);
    }
)


let fruitsCap = fruits.map(
    function upperCase(value){
        return value.toUpperCase();
    }
)
console.log(fruitsCap);


let moreThanThree = fruits.every(
    function (value){
        return value.length > 3;
    }
);

console.log(moreThanThree);



const mortalKombat = new Set();

mortalKombat.add(`Scorpion`).add(`Sub-Zero`).add(`Reptile`).add(`Liu Kang`);   


mortalKombat.forEach(
    function (value) {
        console.log(value);
    }
);


let sF = new Map();

sF.set(`Ryu`, `Japan`).set(`Ken`,`Usa`).set(`Guile`,`Usa`).set(`Blanka`,`Brazil`);

for (let [keys, values] of sF.entries()){
     console.log(`${keys} is from ${values}`);
}



function myName() {
    console.log("George");
}

myName();
myName();
myName();



let colors = function () {
    console.log(`red, green, and blue`);
}

let myColors = colors;

myColors();



function favFood (response) {
    if (response === undefined){
        console.log(`Please enter your favorite food!`);
    }
    else{
    console.log(`Your favorite food is ${response}`);
    }
}

favFood(`Pizza`);



function favNum(num) {
    return num;
}
 
let myFavNum = favNum(7);

console.log(`My fav number is ${myFavNum}`);


// TOP assignment
function add7(num) {
    return num + 7
}

console.log(add7(3));

function multiply(num1, num2) {
    return num1 * num2
}

console.log(multiply(2,2));

function capitalize (phrase) {
    return phrase.charAt(0).toUpperCase()+ phrase.substring(1);
}

console.log(capitalize(`hello`));

function lastLetter (phrase2) {
    return phrase2.substring(phrase2.length -1)
}

console.log(lastLetter(`the last letter of the string is G`));




//lesson 38 tasks

const currentYear = new Date().getFullYear();
 
console.log(currentYear);

let username = `dreamer123`;

username = `dreamer1234`;

console.log(username);



//lesson 39 tasks `Scope`

function a() {
    let firstName = `George`;
    let lastName = `Diaz`;
    let age = 22;
    let country = `USA`;
    console.log(`${firstName} ${lastName} is ${age} years old and lives in the ${country}.` );
}

a();



//if statement practice with input from the user 
let answer = parseInt(prompt(`Please enter the number you would like to FizzBuzz up to: `));

for (let i = 1; i <= answer; i++) {
    if (i%3 ===0 && i%5 ===0) {
        console.log(`FizzBuzz`);
    } else if (i%5 === 0) {
        console.log(`Buzz`);
    } else if (i % 3 === 0) {
        console.log(`Fizz`)
    } else {
        console.log(i);
    }

}


//this keyword practice

let book = {
    title: `Me`,
    author:`George D.`,
    info: function () {
        console.log(`${this.title} by ${this.author}`)
    }
}

book.info();

//call apply and bind practice

const book = {
    title: `Harry Potter`,
    author:`J.K. Rowling`,
}

function info (year) {
    console.log(`${this.title} was written by ${this.author} and was released in the year ${year}`)
}

info.apply(book,[`2000`]);

const bookInfo = info.bind(book,`2000`);
bookInfo();



//object and array destructuring

//object destructuring
const user = {
    firstName: `George`,
    country: `USA`,
    todos: {
        todo1: `1.Do the shopping`,
        todo2:`2.Play some games`,
    }
};
 
let {
    firstName,
    country,
    todos:{todo1, todo2}
} = user;

console.log(firstName, country, todo1, todo2);

// arrray destructuring
const books = [
    `Harry Potter`,
     `Diary of a wimpy kid`,
     `Spiderman`,[`abc`, `def`, `ghi`]];

let [book1, book2, book3,[book4, book5, book6]] = books;

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);



// spread practice

    //array spread
const colors = [`pink`, `green`, `purple`];
const updatedColors = [...colors, `orange`, `teal`, `red`];
colors.pop();
//the .pop() removes the last item in an array
//What do you think will happen to the new array? Nothing because the new array is a copy of the original, not a reference
console.log(updatedColors);


    //object spread
const user = {
    name: `John`,
    age: 25,
    occupation: {
        role: `Developer`,
    }
};

const updatedUser = {
    ...user,
    occupation: {
    ...user.occupation, 
        employer: `Youtuber`,
    }
    }

console.log(updatedUser);


    //function spread

const movie = [`Jumannji`, 1995];
function movieFact(title, year) {
   return console.log(`The movie ${title} was released in ${year}`)
}

movieFact(...movie);



//rest parameters practice

const colors = function  (...colors) {
console.log(colors[1]); //here i am logging only the second value and putting all the other values into an array
}

colors(`green`, `yellow`, `red`, `orange`);

    //using both rest and spread parameters 
function heroes(a,b, ...c) {
    console.log(a,b,...c);
}

heroes(`Superman`, `Batman`, `The Hulk`, `Iron Man`, `Wolverine`);




//arrow function practice

const user = name => `My name is ${name}`;
console.log(user(`George`));


const greeting =() => console.log(`Hello, how are you?`);
greeting();


let book = {
    title: `The fellowship of the Ring`,
    related: [`The Two Towers, The Return of the King`],
    showRelated: function () {
        this.related.forEach((relatedBooks) => {
            console.log(`Title: ${this.title} `);
            console.log(`Related books: ${relatedBooks}`);
        });
    },
};

book.showRelated();



//setTimeout and setInterval practice

function myName(firstName) {
    console.log(`My name is ${firstName}`)
}

//setInterval(myName, 1000, `George`);


function count(start,end) {
    let timer = setInterval (() => {
        console.log(start);
        if(start >= end) {
            clearInterval(timer)
        }else {
            start++;
        }
    }, 1000);

}

count(0,10);

*/

//recursive function practice

const countUp = (num) => {
    console.log(num);

    const updatedNum = num + 1;

    if(updatedNum <=10) {
        countUp(updatedNum)
    }
}

countUp(0);