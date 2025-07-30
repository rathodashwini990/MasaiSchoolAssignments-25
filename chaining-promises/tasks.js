function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

function processTask(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${previousResult}`);
    }, 1500);
  });
}

function finalizeTask(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${previousResult}`);
    }, 500);
  });
}

// Chain the tasks
startTask()
  .then(resultA => {
    console.log(resultA);
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.error("Error in task chain:", error);
  });