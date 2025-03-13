function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000;
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

randomDelay()
    .then(delay => console.log(`Success: Delayed for ${delay} milliseconds.`))
    .catch(delay => console.error(`Failure: Delayed for ${delay} milliseconds.`));