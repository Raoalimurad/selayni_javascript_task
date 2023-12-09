var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var even = [];
var odd = [];

for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
        even.push(numberArray[i]);
    } else {
        odd.push(numberArray[i]);
    }
}

// Display the results in the browser
document.write("Even numbers: " + even.join(", ") + "<br>");
document.write("Odd numbers: " + odd.join(", "));
