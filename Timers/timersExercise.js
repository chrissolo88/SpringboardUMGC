function countdown(count) {
    let interval = setInterval(function() {
        if(count > 1) {
            count--;
            console.log(count);
        } else {
            clearInterval(interval);
            console.log("DONE!");
        }
    }, 1000);
}

function randomgame() {
    let num = 0;
    let count = 0;
    let interval = setInterval(function() {
        num = Math.random();
        count++;
        if(num > .75) {
            clearInterval(interval);
            console.log(`Number: ${num}, it took ${count} attempts to get a number greater than .75`);
        }
    }, 1000);
}