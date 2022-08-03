const numbers = Array(49).fill().map((_, index) => index + 1);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers.slice(0, 6));
