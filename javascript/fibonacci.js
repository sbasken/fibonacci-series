function fibonacci(num) {
  if (num < 2) {
    return num
  }
  const numArray = [0, 1]
  for (let i = 2; i < num + 1; i++) {
    numArray[i] = numArray[i - 2] + numArray[i - 1]
  }
  return numArray[numArray.length - 1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
