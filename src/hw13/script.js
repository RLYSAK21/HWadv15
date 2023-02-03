function* createIdGenerator() {
    let index = 1;
    while (true) {
        yield index++;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(value) {
    while (true) {
        let index = yield value;
        if (index === "up") {
            value += 2;
        } else if (index === "down") {
            value -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);
console.log("Home work 13");
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);