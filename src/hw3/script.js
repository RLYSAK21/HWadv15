// Завдання 1
function getMaxDigit(number) {
    let maxNumber = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > maxNumber) {
            maxNumber = number[i]
        }
        
    }
    return maxNumber;
}
// Завдання 2
function getDegree(number, numbersDegree) {
    let NumberOfDegree = 0;
    while (number % numbersDegree == 0) {
        number = number / numbersDegree;
        NumberOfDegree++;
    }
    return NumberOfDegree;
}
// Завдання 3
function correctName(wrongName) {
    return wrongName[0].toUpperCase() + wrongName.slice(1).toLowerCase();
};
// Завдання 4
function salary(salaryWithTaxes, taxes) {
    return salaryWithTaxes - (salaryWithTaxes * (taxes / 100));
}
// Завдання 5
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// Завдання 6
function countLetter(leter, word) {
    let quantityOfLetters = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] == leter) {
            quantityOfLetters++;
        }
    }
    return quantityOfLetters;
}
// Завдання 7-8
function convertCurrency(money) {
    let result = "";
    if (money.toUpperCase().indexOf("UAH") >= 0) {
        result = money.toUpperCase().replace("UAH", "") / 40 + " $";
    } else if (money.indexOf("$") >= 0) {
        result = money.replace("$", "") * 40 + " UAH";
    } else {
        result = "We can't change your money";
    }
    return result;
}
// Завдання 9-10
function getRandomPassword(passwordLength = 8) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}
// Завдання 11
function deleteLetters(a, word) {
    result = word.replaceAll(a, '');
    return result
}

console.log(`Функція №1: ${getMaxDigit("1234567256")}`);
console.log(`Функция №2: ${getDegree(1024, 2)}`);
console.log(`Функция №3: ${correctName("роМАн")}`);
console.log(`Функция №4: ${salary(1000, 19.5)}`);
console.log(`Функция №5: ${getRandomInt(1, 10)}`);
console.log(`Функция №6: ${countLetter("a", "alphabetatatatat")}`);
console.log(`Функция №7-8: ${convertCurrency("100$")}`);
