// let studentName = []
// studentName.push("rao")
// studentName.push("ali")
// studentName.push("murad")
// console.log(studentName)

// let fruits = ["apple","mango","banana","grapes"]
// console.log(fruits)

// let numbers = [1,2,3,4,5]
// console.log(numbers);

// const booleanArray = [true, false, true, false];
// // Log the array to the console
// console.log(booleanArray);



// Declare and initialize a mixed array
// const mixedArray = [1, "apple", true, 3.14, false];
// // Log the array to the console
// console.log(mixedArray);

// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for(let i = 1 ; i <qualifications.length; i++){
//     document.write(`${i}) ${qualifications[i]} <br>`)
// }


// Declare and initialize arrays for student names and scores
// const studentNames = ["John", "Jane", "Bob"];
// const scores = [400, 450, 480]; // Assuming total marks are 500 for each student

// // Function to calculate percentage
// function calculatePercentage(score, totalMarks) {
//     return (score / totalMarks) * 100;
// }

// // Display scores and percentages
// console.log("Student Scores and Percentages:");
// for (let i = 0; i < studentNames.length; i++) {
//     const studentName = studentNames[i];
//     const score = scores[i];
//     const totalMarks = 500; // Assuming total marks are 500 for each student

//     const percentage = calculatePercentage(score, totalMarks);

//     console.log(`${studentName}'s Score: ${score}, Percentage: ${percentage.toFixed(2)}%`);
// 

// part a of q no 9

// let colors = ["red","green","blue","purple"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }
//  let userinput = prompt("Entre colour to the begining")
//  colors.unshift(userinput)
//  document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)}
//  console.log(colors)

// part b of q no 9

// let colors = ["red","green","blue","purple"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }
// let userinput = prompt("Entre colour to the ending")
// colors.push(userinput)
//  document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)}
//  console.log(colors)

// part c of q no 9
// let colors = ["red","green","blue","purple"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }

// colors.unshift("Purple", "Orange")

// document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }

// part d of q no 9
// let colors = ["red","green","blue","purple"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }

// colors.shift()

// document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }

// part e of q no 9

// let colors = ["red","green","blue","purple","pink","yellow"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }

// const deleteIndex = parseInt(prompt("Enter the index to delete colors from:"));
// const deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(deleteIndex, deleteCount);

// document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }


//  QNO 10

// const studentScores = [85, 72, 93, 64, 91];
// Display the original array in the browser
// document.write("<h2>Original Student Scores:</h2>");
// document.write("<p>" + studentScores.join(", ") + "</p>");

// // Sort the array in ascending order using Array's sort method
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array in the browser
// document.write("<h2>Sorted Student Scores (Ascending Order):</h2>");
// document.write("<p>" + studentScores.join(", ") + "</p>");


// Q NO 11
// Initialize an array with city names
// const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// // Display the original array
// document.write("Original Cities Array:", cities + "<br>");

// // Copy 3 array elements to selectedCities array
// const selectedCities = cities.slice(1, 4); // Copies elements at index 1, 2, and 3

// // Display the selectedCities array
// document.write("Selected Cities Array:", selectedCities);

// QNO 12
// Initialize an array
// var arr = ["This", "is", "my", "cat"];

// // Create a single string using the array's join method
// var resultString = arr.join(" ");

// // Display the result string
// document.write("Result String:", resultString);



// Initialize an empty array (queue)
// const fifoQueue = [];

// // Function to enqueue (add) an element to the queue
// function enqueue(value) {
//     fifoQueue.push(value);
// }

// // Function to dequeue (remove) an element from the queue
// function dequeue() {
//     if (fifoQueue.length === 0) {
//         console.log("Queue is empty");
//         return undefined;
//     }
//     return fifoQueue.shift();
// }

// // Enqueue values to the queue
// enqueue("First");
// enqueue("Second");
// enqueue("Third");

// // Dequeue and display values in the order they were stored
// document.write(dequeue()); // Output: First
// document.write(dequeue()); // Output: Second
// document.write(dequeue()); // Output: Third

// // Attempting to dequeue from an empty queue
// document.write(dequeue()); // Output: Queue is empty



// QNO 14
// Initialize an empty array (stack)
// const lifoStack = [];

// // Function to push (add) an element to the stack
// function push(value) {
//     lifoStack.push(value);
// }

// // Function to pop (remove) an element from the stack
// function pop() {
//     if (lifoStack.length === 0) {
//         console.log("Stack is empty");
//         return undefined;
//     }
//     return lifoStack.pop();
// }

// // Push values to the stack
// push("First");
// push("Second");
// push("Third");

// // Pop and display values in reverse order
// console.log(pop()); // Output: Third
// console.log(pop()); // Output: Second
// console.log(pop()); // Output: First

// // Attempting to pop from an empty stack
// console.log(pop()); // Output: Stack is empty



// QNO 15
// // Array of phone manufacturers
// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Generate HTML for the dropdown/select menu
// document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
// document.write("<select id='manufacturer'>");

// // Loop through the array to create option elements
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
// }

// document.write("</select>");
