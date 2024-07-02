const numbers = [43, 65];
// const [x,y] = [43, 65]
const [x,y] = numbers
// console.log(x,y)

function boxify (num1,num2){
    const nums = [num1,num2]
    return nums;
}
// console.log(boxify(43,65));


// Object Destructuring
// const {name,age}= {name:"John", age: 30};
const {id,name,age}= {id: 12,name:"John", age: 30};

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html','css','js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garments'
        }
    }
}

const {machine,ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch;
console.log(brand);