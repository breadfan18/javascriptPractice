// var person = {
//  name: "Swaroop",
//  age: 31,
//  favColor: "Black",
//  height: 183
// };
//
// var me = person.name;
// console.log(me);

function person (name, age, favColor, height){
  this.name = name;
  this.age = age;
  this.favColor = favColor;
  this.height = height;
}

var firstPerson = new person("Joel", 25, "Green", 177);

console.log(firstPerson.favColor);
