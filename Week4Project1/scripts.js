// // Define the Employee object template
// function Employee(name, age, department, salary) {
//     this.name = name;
//     this.age = age;
//     this.department = department;
//     this.salary = salary;
// }

// // Function to calculate the average salary of all employees
// function calculateAverageSalary(employees) {
//     const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
//     return totalSalary / employees.length;
// }

// // Function to find employees in a specific department
// function findEmployeesByDepartment(employees, department) {
//     return employees.filter(emp => emp.department === department);
// }

// // Function to increase salary for all employees by a certain percentage
// function increaseSalary(employees, percentage) {
//     employees.forEach(emp => {
//         emp.salary *= (1 + percentage / 100);
//     });
// }

// // Function to sort employees based on their age in ascending order
// function sortEmployeesByAge(employees) {
//     return employees.slice().sort((a, b) => a.age - b.age);
// }

// // Example usage:
// const employees = [
//     new Employee("Alice", 30, "HR", 50000),
//     new Employee("Bob", 35, "IT", 60000),
//     new Employee("Charlie", 25, "Finance", 55000),
//     new Employee("David", 40, "HR", 70000)
// ];

// // Display average salary
// document.getElementById("output").innerHTML += "<p>Average Salary: " + calculateAverageSalary(employees) + "</p>";

// // Display employees in HR department
// document.getElementById("output").innerHTML += "<p>Employees in HR department: " + JSON.stringify(findEmployeesByDepartment(employees, "HR")) + "</p>";

// // Increase salaries by 10%
// increaseSalary(employees, 10);

// // Display updated salaries
// document.getElementById("output").innerHTML += "<p>Increased salaries: " + JSON.stringify(employees) + "</p>";

// // Sort employees by age
// const sortedEmployees = sortEmployeesByAge(employees);

// // Display sorted employees
// document.getElementById("output").innerHTML += "<p>Employees sorted by age: " + JSON.stringify(sortedEmployees) + "</p>";
