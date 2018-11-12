// function Constructor
const Person = function() {
  this.name = name;
  this.age = age;
};

console.log("name");

const personProto = {
  name: "Gozy",
  getAge: function() {
    return this.name;
  }
};

let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.map(function(i) {
  return i ** 2;
});

console.log(newArray);

let apocalypse = "";
let task = !apocalypse ? "learn React.js" : "run around"; //Ternary operator

console.log(task);
