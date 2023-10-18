//////chp no 5:
///QNO 1

// let num1=+prompt("Enter the first value");
// let num2=+prompt("Enter the second  value");
// let sum=num1+num2;
// document.write(`the sum of ${num1} and ${num2} is ${sum}`)

// ///B)
// let subtract=num1-num2;
// document.write(`the subtract of ${num1} and ${num2} is ${subtract}`);

// ///c)
// let multiplication=num1*num2;
// document.write(`the multiplication of ${num1} and ${num2} is ${multiplication}`);



// let divison=num1/num2;
// document.write(`the divison of ${num1} and ${num2} is ${divison}`);






// a. Declare a variable.
// var myVariable;

// // b. Show the value of the variable after declaration.
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// // c. Initialize the variable with some number.
// myVariable = 5;

// // d. Show the initial value of the variable.

// document.write("Initial value: " + myVariable + "<br>");

// // e. Increment the variable.
// myVariable++;

// // f. Show the value of the variable after increment.
// document.write("Value after increment is: " + myVariable + "<br>");

// // g. Add 7 to the variable.
// myVariable += 7;

// // h. Show the value of the variable after addition.
// document.write("Value after addition is: " + myVariable + "<br>");

// // i. Decrement the variable.
// myVariable--;

// // j. Show the value of the variable after decrement.
// document.write("Value after decrement is: " + myVariable + "<br>");

// // k. Show the remainder after dividing the variable's value by 3.
// var remainder = myVariable % 3;

// // l. Output the remainder.
// document.write("The remainder is: " + remainder);


///QNO 04:

// // Store the ticket price in a variable
// var ticketPrice = 600; // 600 PKR per ticket

// // Calculate the cost of buying 5 tickets
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;

// // // Display the result
// // document.write("Cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR");



//////QNO 5

// for(let i=1;i<=10;i++){
//     document.write(`5 x ${i} = ${5*i} \n`+ "<br>")
// }


///////Q NO 6

// // Step a: Store a Celsius temperature into a variable.
// var celsiusTemperature = 30; // You can change this value to your desired Celsius temperature.

// // Step b: Convert it to Fahrenheit & output the result.
// var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// // Step c: Now store a Fahrenheit temperature into a variable.
// var fahrenheitTemperature2 = 86; // You can change this value to your desired Fahrenheit temperature.

// // Step d: Convert it to Celsius & output the result.
// var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
// console.log(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


//////QNO 7


// var priceItem1 = 25; // Price of item 1
// var priceItem2 = 15; // Price of item 2
// var quantityItem1 = 3; // Ordered quantity of item 1
// var quantityItem2 = 2; // Ordered quantity of item 2
// var shippingCharges = 5; // Shipping charges

// // Calculate the costs.
// var totalCostItem1 = priceItem1 * quantityItem1;
// var totalCostItem2 = priceItem2 * quantityItem2;
// var subtotal = totalCostItem1 + totalCostItem2;
// var totalCost = subtotal + shippingCharges;

// // Display the receipt in the browser.
// document.write("<h1>Receipt</h1>");
// document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
// document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
// document.write("<p>Total Cost of Item 1: $" + totalCostItem1 + "</p>");
// document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
// document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
// document.write("<p>Total Cost of Item 2: $" + totalCostItem2 + "</p>");
// document.write("<p>Subtotal: $" + subtotal + "</p>");
// document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
// document.write("<p><strong>Total Cost: $" + totalCost + "</strong></p>");


/////QNO 8

// Define the total marks and marks obtained by the student.
// var totalMarks = 1000; // You can change this to the total marks for your specific exam.
// var marksObtained = 780; // You can change this to the marks obtained by the student.

// // Calculate the percentage.
// var percentage = (marksObtained / totalMarks) * 100;

// // Display the result in the browser.
// document.write("<h1>Result</h1>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");


/////QNO 9

// Define the amount in US Dollars and Saudi Riyals.
// var usDollars = 10;
// var saudiRiyals = 25;

// // Define the exchange rates.
// var exchangeRateDollarToRupee = 104.80;
// var exchangeRateRiyalToRupee = 28;

// // Calculate the total amount in Pakistani Rupees.
// var totalRupees = (usDollars * exchangeRateDollarToRupee) + (saudiRiyals * exchangeRateRiyalToRupee);

// // Display the total amount in Pakistani Rupees.
// document.write("<h1>Currency Conversion</h1>");
// document.write("<p>Total amount in Pakistani Rupees: " + totalRupees + " PKR</p>");




////Q NO 10

// Initialize the variable with some number.
// var initialNumber = 20; // You can change this to your desired initial number.

// // Perform the arithmetic operations in a single expression.
// var result = ((initialNumber + 5) * 10) / 2;

// // Display the result.
// console.log("Result: " + result);


/////QNO 11

// a. Store the current year in a variable.
// var currentYear = new Date().getFullYear();

// // b. Store their birth year in a variable.
// var birthYear = 1990; // You can change this to the person's actual birth year.

// // c. Calculate their 2 possible ages based on the stored values.
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1; // The second possible age (if the birthday hasn't occurred yet this year).

// // Output the results to the screen.
// document.write("They are either " + age1 + " or " + age2 + " years old.");

////Q NO 12

// Define the radius of the circle.
// var radius = 5; // You can change this to your desired radius.

// // Define the value of π (pi).
// var pi = 3.142;

// // Calculate the circumference of the circle.
// var circumference = 2 * pi * radius;

// // Calculate the area of the circle.
// var area = pi * Math.pow(radius,2)

// // Output the results to the screen.
// document.write("The circumference is " + circumference+"<br>");
// document.write("The area is " + area);


////Q NO 13

// a. Store your favorite snack into a variable.
// var favoriteSnack = "chocolate";

// // b. Store your current age into a variable.
// var currentAge = 15; // You can change this to your current age.

// // c. Store a maximum age into a variable.
// var maximumAge = 65; // You can change this to your estimated maximum age.

// // d. Store an estimated amount per day (as a number).
// var amountPerDay = 3; // You can change this to your estimated daily consumption.

// // Calculate how many you would eat total for the rest of your life.
// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365; // Assuming an average of 365 days per year.
// var totalSnacksRequired = daysRemaining * amountPerDay;

// // Output the result to the screen.
// document.write("You will need " + totalSnacksRequired + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");












