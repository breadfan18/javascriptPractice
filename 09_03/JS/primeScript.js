const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    //we use continue in order to only display the prime numbers: Continue means that if the result is false,
    //if will ignore the rest of the code in the loop, and go back to the next iteration of the loop.
    //that means if result returns false, that means the number is not a prime number, then it doesnt
    //console out anything, and runs the next iteration..so in this way it will only console out
    //for the numbers that return result = true, meaning prime numbers.
   if (result == false) {
       continue;
   }
    console.log(i + " is a prime number." + result);
}
