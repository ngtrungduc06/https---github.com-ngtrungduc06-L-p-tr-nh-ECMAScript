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
// Bài 2:
function fetchMultipleData(urls) {
    // Hàm giả lập việc fetch dữ liệu user theo ID
    function fetchUserData(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId > 0) {
                    resolve({ id: userId, name: `User ${userId}` });
                } else {
                    reject(`Invalid user ID: ${userId}`);
                }
            }, 1000);
        });
    }

    // Tạo mảng Promise cho tất cả URLs (hoặc ID)
    const promises = urls.map((url) => {
        // Giả sử url có dạng "/api/user/1" => tách ID ra
        const userId = parseInt(url.split("/").pop());
        return fetchUserData(userId);
    });

    // Dùng Promise.all để chờ tất cả hoàn thành
    return Promise.all(promises);
}

// Gọi thử hàm
fetchMultipleData(["/api/user/1", "/api/user/2", "/api/user/3"])
    .then((users) => {
        console.log("All users:", users);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("All operations completed");
    });
