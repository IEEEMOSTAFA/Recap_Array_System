// 1. JSON
const student = {
    name: 'mostafa',
    age : 21,
    movies: ['kgb','money-heist']
}
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);

const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys, values);
const numbers = [23,43,67,87,23,78];
numbers.forEach(num => console.log(num));

numbers.map(num =>  num * 2);console.log(numbers);

// add or remove from an array
const products = [
    {name : 'laptop', price: 3200,brand: 'macbook',color: 'silver'},
    {name : 'iphone', price: 700,brand: 'iphone',color: 'golden'},
    {name : 'watch', price: 3000,brand: 'casio',color: 'yellow'},
    {name : 'sunglass', price: 300,brand: 'ray',color: 'black'}
];
const newProduct = {name: 'webcam',price : 700,brand: 'logitech'};
// copy products array and then add new product
const newProducts = [...products,newProduct]
console.log(newProducts);
// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'iphone'); 
console.log(remaining)