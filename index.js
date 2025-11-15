const userInput = prompt(
  `Please eneter desired Froyo flavors separated by a comma!`
);
//they enter
//0
const amtOfFlav = userInput.split(`,`);
console.log(amtOfFlav);
//made amtOfFlav an array
const flavCounted = {};
//^^stores counted flavors currently at zero
// amtOfFlav.forEach((item) => {
//   flavCounted[item] = (flavCounted[item] || 0) + 1;
// });
// console.log(flavCounted);
//Can you parse the user input into an array of froyo flavors?
const stringified = JSON.stringify(amtOfFlav);
//console.log(stringified);
//^^made a string out of array, not what I want

//console.log(JSON.parse(amtOfFlav));
