const person = {
    name: 'mostafa',
    profession: 'Traffic Sergeon',
    age: 39,
    address: 'Shahabag',
    25: 'summer',
    'son-name' : 'sunny'
}

// dot notation
// const prof1 = person.profession;
// bracket notation (square bracket)
const prof2 = person['profession'];
const prof3 = person[`age`];
const prof4 = person[`25`];
const prof5 = person['son-name'];
console.log(prof5)
console.log(prof4)
console.log(prof3)
console.log(prof2)