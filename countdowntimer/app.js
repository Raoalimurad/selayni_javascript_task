let remainingDays = new Date("Mar 10, 2024 5:00:00").getTime();

let interval = setInterval(function () {
    let nowDate = new Date().getTime();
    let difference = remainingDays - nowDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `${days} days : ${hours} hours : ${minutes} Minutes :  ${seconds} Seconds `
}, 1000);
