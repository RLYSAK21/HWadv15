function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sign = Date.now().toString().slice(-5);
            resolve(String.fromCharCode(sign));
        }, 50);
    });
}

async function getRandomChinese(length) {
    let result = "";
    for (var i = 0; i < length; i++) {
        result += await timer();
    }
    console.log(result); // 10
}
console.log("Home work 11");
console.log(getRandomChinese(4));
