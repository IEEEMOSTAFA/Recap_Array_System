// false::: '',0,null,undifined
// True::: 'almas',5,true,'',undefined

const myVar = 5;
// // check any truthy
// if(myVar){
//     myVar = myVar * 100;
// }
// else{
//     myVar = 0;
// }
// let myMoney = 50;
// // you check negative or falsy anything
// if(!myMoney){

// }
let money = 80;
let food;
if(money > 100){
    food = 'pizza'
}
else{
    food = 'sandwich';
}
// ternary operator
let food1 = money > 100 ? 'pizza' : 'sandwich';
// console.log(food1)
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink)
const num1 = 52;
// console.log(num1)
const numStr = num1 + '';
// console.log(numStr);
const input = '560';
const inputNum = +input;
console.log(inputNum);

// const isActive = true;
const isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User'); 

isActive ? showUser() : hideUser();


// isActive && showUser();

isActive || hideUser();
// toggle boolean
isActive = !isActive;
