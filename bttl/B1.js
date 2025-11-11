// const color=["red","blue","green"];

// const[red,blue,green,yellow]=color;

// console.log(red,blue,green,yellow); 

const numbers = [1, 2, 3, 4, 5];
const [second, , fourth] = numbers;
console.log(second, fourth); 
// 2,4 trog numbers

const user=["password","email","age","name"];
const [password,...userInfo]=user;
console.log(userInfo)