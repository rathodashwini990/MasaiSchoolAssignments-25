function outerFunction() {
  let message = "Hello from Closure!";

  return function innerFunction() {
    console.log(message);
  };
}

const storedFunction = outerFunction();
storedFunction();