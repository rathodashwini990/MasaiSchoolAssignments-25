const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

function evaluateEmployees(employees) {
  return employees
    .filter(emp => emp.tasksCompleted > 5)
    .map(emp => {
      let performance = "";
      if (emp.rating > 4.5) {
        performance = "Excellent";
      } else if (emp.rating >= 3 && emp.rating <= 4.5) {
        performance = "Good";
      } else {
        performance = "Needs Improvement";
      }

      return {
        name: emp.name,
        performance: performance
      };
    })
    .sort((a, b) => {
      const performancePriority = {
        "Excellent": 3,
        "Good": 2,
        "Needs Improvement": 1
      };
      return performancePriority[b.performance] - performancePriority[a.performance];
    });
}

console.log(evaluateEmployees(employees));
