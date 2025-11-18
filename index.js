// Function that returns a Promise
function fetchData(shouldSucceed) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully!"); // Resolve the promise with a success message
      } else {
        reject("Error: Failed to fetch data."); // Reject the promise with an error message
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Consume the Promise
console.log("Attempting to fetch data...");

// Example 1: Successful operation
fetchData(true)
  .then((message) => {
    console.log("Success:", message); // This runs if the promise resolves
  })
  .catch((error) => {
    console.error("Failure:", error); // This runs if the promise rejects
  });

// Example 2: Failed operation
fetchData(false)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Failure:", error);
  });

// Example 3: Using .finally()
fetchData(true)
  .then((message) => {
    console.log("Success (finally example):", message);
  })
  .catch((error) => {
    console.error("Failure (finally example):", error);
  })
  .finally(() => {
    console.log("Fetch attempt completed (finally example)."); // This always runs, regardless of success or failure
  });