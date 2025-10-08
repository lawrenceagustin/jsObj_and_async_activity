// A. Make an array containing at least 5 JavaScript objects.
let products = [
  { name: "Laptop", price: 45000, inStock: true },
  { name: "Mouse", price: 800, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false },
  { name: "Monitor", price: 7000, inStock: true },
  { name: "Headset", price: 1200, inStock: false }
];

// B. Use forEach() method to print each object in the array.
console.log("B. forEach():");
products.forEach(item => console.log(item));

// C. Use push() method on the array.
console.log("\nC. push():");
products.push({ name: "Printer", price: 5000, inStock: true });
console.log(products);

// D. Use unshift() method on the array.
console.log("\nD. unshift():");
products.unshift({ name: "Webcam", price: 2500, inStock: true });
console.log(products);

// E. Use filter() method on the array.
console.log("\nE. filter():");
let availableItems = products.filter(item => item.inStock === true);
console.log(availableItems);

// F. Use map() method on the array.
console.log("\nF. map():");
let productNames = products.map(item => item.name);
console.log(productNames);

// G. Use reduce() method on the array.
console.log("\nG. reduce():");
let totalPrice = products.reduce((sum, item) => sum + item.price, 0);
console.log("Total Price of All Products:", totalPrice);

// H. Use some() method on the array.
console.log("\nH. some():");
let hasCheapItem = products.some(item => item.price < 1000);
console.log("Any item cheaper than ₱1000?", hasCheapItem);

// I. Use every() method on the array.
console.log("\nI. every():");
let allInStock = products.every(item => item.inStock === true);
console.log("Are all products in stock?", allInStock);
