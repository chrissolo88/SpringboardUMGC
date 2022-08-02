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