/*
console.log(x + 1);
console.log("when", 200);
console.log(300);
*/

/* 
const styles = "padding: 10px; background-color: blue; color: #fff";

console.error("Alert");
console.table({ name: "brad", email: "brad@gmail.com", age: 24 });
console.log("%cHello World", styles);
*/

//DATA TYPE CONVERSION4
// let amount = 0;
//Convert string to number

// amount = +amount;
// amount = Number(amount);
// amount = parseInt(amount);

//Convert number to string

// amount = amount.toString();
// amount = String(amount);

//Convert string to decimal
// amount = parseFloat(amount);

//Convert number to boolean

// amount = Boolean(amount);

// console.log(amount, typeof amount);

//

/* 
//Operators

//arithmethic operators
let a = 7,
  b = 3;
result = a + b;
result = a - b;
result = a * b;
result = a / b;
result = a % b;

//Concatenation
result = "Hello" + " " + "World";

//Exponential

result = 2 ** 3;

//Increment

result++;

//Decrement
result--;

//Assignment operator
let x = 3;
x -= 2;
x += 3;
x /= 2;

//Comparison operator

//this checks only the value of equals to
x = 4 == 2;
//this check the type and value of equals to
x = 2 === "2";
//check the value of not equal to. it is true if not equal
x = 2 != "4";
//check the value and type of not equal to. it's true if not equal
x = 2 !== "2";
//greater than
x = 10 > 5;
//less than
x = 10 > 5;
//equal or less than
x = 10 <= 5;
//equal or greater than
x = 10 >= 5;

//arithmetic calculator
// Take input from user
const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number:");
const op = prompt("Enter operator (either +, -, * or /):");

// Convert strings to numbers
const n1 = Number(num1);
const n2 = Number(num2);

let calc;

// Perform operation
if (op === "+") {
  calc = n1 + n2;
} else if (op === "-") {
  calc = n1 - n2;
} else if (op === "*") {
  calc = n1 * n2;
} else if (op === "/") {
  calc = n1 / n2;
} else {
  console.log("Invalid operator");
}

// Display result
if (calc !== undefined) {
  console.log(`Result: ${calc}`);
}

console.log("x is", x);

console.log(result);
*/

/* 
//TYPE Coercion
let x;

x = 5 + "5";

x = 5 + null;

x = 7 + true;

x = 7 * "5";

console.log(x, typeof x);
*/

//Template Literals
let x;

const fullName = "John odukale";
const age = 35;

console.log(`Hello, my fullname is ${fullName} and i am ${age} years old.`);

/* 

//working with String Properties and methods
const s = "hello world";

x = s.length;

//access string values
x = s[6];

//string prototype
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.indexOf("d"); //gets the index of d
x = s.slice(0, 5); //same as substring()
x = "          hello";
x = x.trim(); //trims white space
x = s.replace("World", "Bimbo");
x = s.split("");

//capitalize H challenge
x = s[0].toUpperCase() + s.substring(1);

console.log(x);
*/

/* 
//Dates
const num = new Number(5.4227);
x = num.toFixed(2);

console.log(`x is ${x} The data is ${typeof x}`);
console.log(num, typeof num);

x = num.valueOf();

console.log(x);

let d;
d = new Date();
x = d.getMonth() + 1;
x = d.getDate();
x = `${d.getDate()}- ${d.getMonth() + 1}-${d.getFullYear()} -`;
x = Intl.DateTimeFormat('en-US').format(d)
console.log(x, typeof x);
*/

//working with arrays
// let y;
// let fruits = ["orange", "banana", "mango", "pawpaw"];
// let foods = ["garri", "pepper", "tomato", "cocoyam"];
// const allFoods = [fruits, foods];
// y = allFoods[0][2]

/* 
//concat 2 or mor arrays with spead operator
y = [...fruits, ...foods];
//concat 2 or more arrays with concat
y = fruits.concat(foods);
/* 

y = fruits.pop();
// y = fruits.reverse()
y = fruits.push('agbalumo')
y = fruits.indexOf('banana')
y = fruits.splice(0,1 )
*/

/* 
//classwork
const arr = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
x = arr2.shift();
y = arr.concat(arr2);
let z = y.splice(6,9)

console.log(y.reverse());
*/

/* 
//Working with Objects
const person = {
  name: "Olugbenga",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports", "tv"],
};

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  d: 4,
  e: 5,
  f: 6,
};

//arrays of objects
const todo = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Carry Milk to the home" },
  { id: 3, name: "Take out trash" },
];
//accessing properties
x = person.address.state;
x = person.hobbies[2];

//upadting ppties
x = person.name = "jane doe";

//removing pptes
delete person.age;

//concatinating 2 or more objects using spread operator
x = { ...obj1, ...obj2 };

//pushing and accessing arrays of objects
x = todo.push({ id: 4, name: "Read tutorial" });
x = todo[1].name;

//checking the ppties of an object
x = todo[1].hasOwnProperty("id");

console.log(x);
*/

/* 
//WORKING WITH JSON
const post = {
  id: 1,
  title: "Post One",
  body: "This is blog post one",
};

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is blog post one",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is blog post one",
  },
];

//Convert object to JSON
const convertJson = JSON.stringify(posts);

//Parse or convert JSON back for browser. To access ppt, i need it parsed
const convertBrow = JSON.parse(convertJson);

console.log(convertJson);

//Asiignment
//step 1
const library = [
  {
    title: "Book of Esther",
    author: "Esther",
    status: {
      own: true,
      read: false,
      reading: false,
    },
  },
  {
    title: "Book of Revelation",
    author: "John the Apostle",
    status: {
      own: true,
      read: false,
      reading: false,
    },
  },
  {
    title: "Letter To Ephesians",
    author: "Paul, The Apostle",
    status: {
      own: true,
      read: false,
      reading: false,
    },
  },
];

//step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//destructuring - step3
const { title: firstBook } = library[0];

let libraryJson = JSON.stringify(library);

console.log(libraryJson);
*/

/* 
//Functions
//Default params
function registerUser(user = "Bot") {
  return user + " is registered";
}

console.log(registerUser());

//Rest Params
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 23, 45, 6));

//Objects as params
function loginUser(user) {
  return `The user ${user.name} with the ID of ${user.id} is logged in`;
}


const user = {
  name: "Sunbo",
  id: 2,
};

console.log(loginUser({ name: "Olu", id: 1 }));
console.log(loginUser(user));

//Arrays as params
function getRandom(arr) {
  //creating a random index based on the length of array
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex]; // getting the index number of arr to get the value of the targeted index

  console.log(item); //displaying the value of the targeted index
}

getRandom([1, 25, 3, 42, 5, 68, 79, 8, 97, 10]);

//Function Declarartion
function addDollarSign(value) {
  return "$" + value;
}

console.log(addDollarSign(500));

//Function Expression
/* 
const addPlusSign = function (value) {
  return "+" + value;
};
*/

/* 

//arrow functions
const addPlusSign = (value) => {
  return "+" + value;
};
//implicit return
const substract = (a, b) => a - b;

console.log(substract(10, 7));
console.log(addPlusSign(5));

//Classwork
// Challenge1- converter for temp (celcius to farenheit) - formular is (F-32) * 5 / 9
const getCelsius = (faren) => ((faren - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

//Challenge2 - get the min and max num from an array. the hint is to use destructuring. i also added getting random number from the array
const minMax = (arrr) => {
  const minNum = Math.min(...arrr);
  const ranNum = Math.round(Math.random() * arrr.length);
  const maxNum = Math.max(...arrr);
  return {minNum,maxNum}

  console.log(`the index number of the array is ${ranNum} while this specific value of this index number is ${arrr[ranNum]}`);
  console.log(...arrr, arrr.length);

  console.log(`The min number is ${minNum} while the max number is ${maxNum}`);
};

console.log(minMax([2, 500, 400, 3, 1, 4, 8.9, 0, 5, 6]));
*/

const calculator = (num1, num2, operator) => {
  if (operator === "+") {
    return console.log(num1 + num2);
  } else if (operator ==="-"){
    return console.log(num1 - num2);
  }else if (operator ==="*"){
    return console.log(num1 * num2);
  }else if (operator ==="/"){
    return console.log(num1 / num2);
  } else {
    return console.log(`Error: operator is not valid`);
  }
};

calculator(90,4,'+')

//checking for empty array
const posts = []

if (posts.length>0) {
  console.log('list posts');
} else {
  console.log('No posts to list');
}

//checking for empty objects
const user = {}

if (Object.keys(user).length > 0) {
  console.log('list users');
} else {
  console.log('No user');
}