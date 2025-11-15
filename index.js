const userInput = prompt(
  `Please eneter desired Froyo flavors separated by a comma!`
);
//they enter vanilla,vanilla,vanilla,strawberry,coffee,coffee
//0
const amtOfFlav = userInput.split(`,`);
console.log(amtOfFlav);
//made amtOfFlav an array

//Can you parse the user input into an array of froyo flavors?
const stringified = JSON.stringify(amtOfFlav);
console.log(stringified);
//^^made a string out of array, not what I want

//console.log(JSON.parse(amtOfFlav));
//Can you parse the user input into an array of froyo flavors? yes
const flavorCount = {};
amtOfFlav.forEach((flavor) => {
  if (flavorCount[flavor]) {
    //^^if we have seen that specific flavor before we add 1
    flavorCount[flavor] += 1;
  } else {
    flavorCount[flavor] = 1;
  } //or we ^^ set it equal to one
});
console.log(flavorCount);
