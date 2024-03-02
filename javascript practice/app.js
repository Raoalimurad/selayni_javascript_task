// //  QNO:01 HOW TO FIND DUPLICATE ELEMENT IN A ARRAY?
// // METHOD NO 1:

// var numbers = [1, 2, 3, 1, 4, 5, 6, 4, 5, 1];
// var addnumber = [];

// for (var i = 0; i < numbers.length; i++) {
//     for (var j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] === numbers[j]) {
//             addnumber.push(numbers[i]);
//         }
//     }
// }

// console.log(addnumber); 


// //  2nd METHOD :

// var number1 = [20,21,20,18,21,19,17,15]
// var duplicate = number1.filter((elem,index,arr)=>arr.indexOf(elem)!==index)
// console.log(duplicate)


//  DAY 03 

// HOW TO FIND MISSING NUMBER BETWEEN INTEGER 

// var numbers = [1,2,3,4,5,6,7,8,10];

// for (var i = 0; i < numbers.length ; i++) {
//     if (numbers[i + 1] - numbers[i] > 1 && numbers[i + 1] - numbers[i] !== 0) {
//         console.log("Missing number:", numbers[i] + 1);
//     } else {
//         console.log("Number is not missing", numbers[i]);
//     }
// }



// DAY O4

// HOW TO FIND ODD OR EVEN NUMBER 


// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var evenArray = [];
// var oddArray = [];
// for(var i =0; i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         evenArray.push(numbers[i]);
//     }else{
//         oddArray.push(numbers[i]);
//     }
// }

// console.log(evenArray);
// console.log(oddArray);

// DAY 05
// METHOD 01
// var numbers = [1,2,4,5,6,78,9,7,79];
// var sum = 0

// for(var i = 0; i<numbers.length;i++){
//     sum+=numbers[i]
// }
// console.log(`the sum of all array numbers is ${sum}`)


// // METHOD 02
// var add =(arr)=>{
// return arr.reduce((previous,current)=>{
//     return previous+current
// })
// }
// console.log(add(numbers))

// DAY O6
// HOW TO FIND FACTORIAL OF ANY INTEGER NUMBER

// var input = +prompt("Enter a number");
// var fact = 1;
// if (input > 0) {
//     for (var i = 1; i <= input; i++) {
//         fact = fact * i;
//     }
// } else {
//     console.log(`the factorial of this ${input} is not valid`)
// }
// console.log(fact)

var intervalId; // Global variable to hold the interval ID

function startTime() {
    var timer = document.getElementById("timer");
    var time = 15;
    timer.innerHTML = `${time}s`;
    
    // Clear the previous interval if it exists
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(intervalId);
            timer.innerHTML = "Time's up!";
        } else {
            timer.innerHTML = `${time}s`;
        }
    }, 1000);
}