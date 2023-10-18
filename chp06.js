////chp no 6


/////QNO 1:
// let a= 10
// document.write("<h1>Result</h1>")
// document.write(`the value of is ${a} <br>`)
// document.write("---------------------"+"<br>")
// ++a;
// document.write(`The value of ++a is ${a}` +"<br>")
// document.write(`the value of a is ${a}` +"<br>" +"<br>")

// document.write(`the value of a is ${a}` +"<br>")
// ++a;
// document.write(`Now the value of a is ${a}`+"<br>" +"<br>")
// --a;
// document.write(`The value of ++a is ${a}` +"<br>")
// document.write(` Now the value of a is ${a}` +"<br>" +"<br>")

// --a;
// document.write(`The value of ++a is ${a}` +"<br>")
// document.write(` Now the value of a is ${a}` +"<br>" +"<br>")


//////// Prompt the user to enter their name.
// var userName = prompt("Please enter your name:");

// // Check if the user provided a name.
// if (userName) {
//   // Greet the user.
//   alert("Hello, " + userName + "! Welcome to our website.");
// } else {
//   // Handle the case when the user didn't provide a name.
//   alert("Hello, there! Welcome to our website.");
// }




//////QNO 3


// let table=+prompt("Entre a value of table","5")

// for(let i=1;i<=10;i++){
//     document.write(`${table}x${i} = ${table *i}`+"<br>")
// }


/////QNO 5



// // a) Take three subjects' names from the user and store them in three different variables.
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // b) Total marks for each subject is 100, store it in another variable.
// var totalMarks = 100;

// // c) Take obtained marks for the  subjectS from the user and store it in a different variable.
// var obtainedMarksSubject1 = +prompt("Enter the obtained marks for " + subject1 + ":");
// var obtainedMarksSubject2 = +prompt("Enter the obtained marks for " + subject2 + ":");
// var obtainedMarksSubject3 = +prompt("Enter the obtained marks for " + subject3 + ":");

// // e) Calculate total marks and percentage for each subject and display the result.
// var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// var totalPercentageSubject1 = (obtainedMarksSubject1 / totalMarks) * 100;
// var totalPercentageSubject2 = (obtainedMarksSubject2 / totalMarks) * 100;
// var totalPercentageSubject3 = (obtainedMarksSubject3 / totalMarks) * 100;



// document.write("<h1>Result</h1>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td><td>" + totalPercentageSubject1 + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td><td>" + totalPercentageSubject2 + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td><td>" + totalPercentageSubject3 + "%</td></tr>");
// document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th><th>" + ((totalObtainedMarks / (totalMarks * 3)) * 100) + "%</th></tr>");
// document.write("</table>");



