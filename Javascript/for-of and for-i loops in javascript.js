/*let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }


// 1. ITERATING AN OBJECT
let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){
    console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log("*****************For of loop starts here**************")
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}
*/

/*let people = ['Piyal','Rakib','Ridoy','Mursalin','Abir','Rekha'];
for(let i = 0;i < people.length;i++){
  console.log(people[i]);
}
people.forEach((element)=>{
  console.log(element);
})
for(let i in people){
  console.log(people[i]);
}
for (let i of people){
  console.log(i);
}*/
let people = {
  piyal : 'Different Being',
  rakib : 'Romantic as hell',
  mursalin : 'Pure religious',
  ridoy : 'Still a child',
  Rekha : 'So naughty'
}
/*for(let i = 0;i < Object.keys(people).length;i++){
  const value = people[Object.keys(people)[i]];
  console.log(value);
}
*/
for(let i in people){
  console.log(i+' => '+people[i]);
}
const obj = {
  name: 'Jean-Luc Picard',
  rank: 'Captain'
};

// Prints "name Jean-Luc Picard" followed by "rank Captain"
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});