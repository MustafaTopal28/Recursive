function generateFibonacci (n) {
  const fibSequence = [0,1]

  for (let i = fibSequence.length ; i < n ; i++ ) {
    const nextSequence = fibSequence[i - 1] + fibSequence[i - 2]
    fibSequence.push(nextSequence);
  }
  return fibSequence;
}

const numberOfTerms= 10 ;
const result = generateFibonacci(numberOfTerms);
console.log(result)
