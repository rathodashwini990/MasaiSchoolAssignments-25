function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve("Data fetched successfully.");
      } else {
        reject("Network error: Unable to fetch data.");
      }
    }, 1000);
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
    console.log("Result:", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataHandler();