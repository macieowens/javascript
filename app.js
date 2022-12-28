console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Macie";
let lastName = "Owens";

var myAge = 19;
let isDone;

// Exercise 2
let fullName = firstName + "" + lastName;
let templateFullName = '${firstName} ${lastName}';
console.log("fullName: ", fullName);
console.log("templateFullName", templateFullName);

// Exercise 3
let myStory;
let myCity = "Dora";
let pastime = "knitting, gardening, reading, writing";

//myStory = 'My name is ${fullName}. I live in ${myCity}. I like to ${pastime}';
myStory =
"My name is " +
fullName +
".\n" +
"I live in " +
myCity +
".\n" +
"I like " +
pastime +
".";

console.log(myStory);
