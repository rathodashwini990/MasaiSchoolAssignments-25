function countCategories(categories) {
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCount;
}

function getSortedCategoriesByCount(categories) {
  const counts = countCategories(categories);

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return sorted;
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log("Category Counts:", countCategories(input));

console.log("Sorted Categories by Count:", getSortedCategoriesByCount(input));