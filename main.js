// Write a function countCharacters that takes in a string and returns an object containing the count of each character in the string.
let a=prompt("ENTER STRING TO COUNT CHARACTER");
function countCharacters(a){
const arr = a.split(""); 
console.log(arr.length)
document.write(arr.length)
}

 countCharacters(a)

//  ASSIGNMENT NO 2
// Write a function fibonacci that takes an integer n as input and returns the n-th number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
let n=+prompt("enter term")
function fibonacci() {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
    console.log(fibonacci(n))
    document.write(fibonacci(n))
  }

  fibonacci(n)


let numbers=prompt("enter set of number")
 const c=numbers.arr
  function sortNumbers() {
    return c.slice().sort((a, b) => a - b);
  }
  const sortedNumbers = sortNumbers(c);
console.log(sortedNumbers);