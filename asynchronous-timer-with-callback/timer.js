function timer(duration, onComplete){
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

function onCompletecallback(message){
    console.log(message)
}

timer(3000, onCompletecallback);