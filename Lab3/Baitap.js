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
function createUser(name, age, isAdmin) {
    if (name === undefined) name = "Anonymous";
    if (age === undefined) age = 18;
    if (isAdmin === undefined) isAdmin = false;

    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
    };
}
// Viết lại với default parameters:
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
    };
}
// Bài 3:
// Hàm mergeArrays
function mergeArrays(...arrays) {
    return arrays.flat();
}
// Hàm sumAll
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Hàm createProduct
function createProduct(name, price, inStock = true) {
    return {
        name: name,
        price: price,
        inStock: inStock,
    };
}
// Bài 4:
function shoppingCart(customerName, ...products) {
    return {
        customerName: customerName,
        products: products,
        totalItems: products.length,
    };
}