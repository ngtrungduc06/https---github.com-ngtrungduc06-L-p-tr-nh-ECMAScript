// Bài tập 1: Array Destructuring
// Bài 1: 
function getFirstLast(array) {
    const [first, , ,fourth] = array;

    console.log(first, fourth);
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

// Bài2
function swapElements(arr) {
    const [first, second, third, fourth, fifth] = arr;

    console.log(first, second, third, fourth, fifth);
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

// Bài tập 2: Object Destructuring
// Bài 1:
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo(user) {
    const { personalInfo: { name, contact: { email } } } = user;
    console.log({ name, email });
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }

// Bài 2:
function createProduct({ name, price, category = "general", inStock = true }) {
   console.log({ name, price, category, inStock });
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }


// Bài tập 3: Promises
// Bài 1:
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("2 seconds passed"));
