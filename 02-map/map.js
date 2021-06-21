const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0])// use .map to get the first letter of every animal name in the arrray animals

console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below with map
let smallNumbers = bigNumbers.map(bigNumber => bigNumber / 10);
console.log(smallNumbers);