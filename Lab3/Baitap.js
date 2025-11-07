// Bài 1:
// Function 1
function multiply(a, b) {
    return a * b;
}
// Function 2
function isPositive(number) {
    return number >= 0;
}
// Function 3
function getRandomNumber() {
    return Math.random();
}
// Function 4
document.addEventListener("click", function () {
    console.log("Clicked!");
});
// Chuyển đổi thành arrow functions:

// Function 1
const multiply = (a, b) => a * b;
// Function 2
const isPositive = number => number >= 0;
// Function 3
const getRandomNumber = () => Math.random();
// Function 4
document.addEventListener("click", () => {
    console.log("Clicked!");
});

// Bài 2:
// Viết lại với default parameters:
const createUser = (name = "Tduc", age = 18, isAdmin = false) =>({

        name: name,
        age: age,
        isAdmin: isAdmin,
});
// Bài 3:
// Hàm mergeArrays
const mergeArrays = (...arrays) => arrays.flat();

// Hàm sumAll
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

// Hàm createProduct
const createProduct = (name, price, inStock = true) => ({
    name,
    price,
    inStock
});

// Bài 4:
const shoppingCart = (customerName, ...products) => ({
    customerName,
    products,
    totalItems: products.length
});
