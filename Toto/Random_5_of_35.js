const numbers = Array(35).fill().map((_, index) => index + 1);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers.slice(0, 5));
