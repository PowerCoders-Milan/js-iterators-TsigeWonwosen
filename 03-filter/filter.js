// create a randomNumbers array, containing 100 random numbers
let randomNumbers = []

for(let i= 0; i < 100; i++){
    randomNumbers.push(Math.ceil(Math.random() * 200))
}

console.log( "\n Random Numbers : \n " + randomNumbers)

// create a function isPrime(number)

const isPrime = (number) =>{
    for(let i = 2; i< number; i++ ){
        if(number % i === 0) return false;
    return number > 1
    }
}

// create a primeNumbers array
const primeNumbers = randomNumbers.filter(number => isPrime(number) ) // filter randomNumbers with isPrime(number)
console.log("\n Prime Filtered Random Numbers : \n " + primeNumbers)