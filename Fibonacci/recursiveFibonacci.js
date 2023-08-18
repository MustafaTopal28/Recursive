// Fibonacci resolution with a recurvive function 

function recursiveFibo(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
  
    return recursiveFibo(n - 1) + recursiveFibo(n - 2);
  }
  const numberOfTerms = 10;
  for (let i = 0; i < numberOfTerms; i++) {
    const result = recursiveFibo(i);
    console.log(result);
  }