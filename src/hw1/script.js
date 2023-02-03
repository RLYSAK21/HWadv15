const firstValue = 15.678;
const secondValue = 123.965;
const thirdValue = 90.2345;

const maxNum = Math.max (firstValue, secondValue, thirdValue);
const minNum = Math.min (firstValue, secondValue, thirdValue);
console.log("Максимальна ціна: ", maxNum);
console.log("Мінімальна ціна: ", minNum);

const sum = firstValue + secondValue + thirdValue;
console.log("Вартість всіх товарів: ", sum);

// ------------- кількість цифр найти код!!!!-----
// const numberOfValue = Math.[]

const firstValueTrunc = Math.trunc(firstValue);
const secondValueTrunc = Math.trunc(secondValue);
const thirdValueTrunc = Math.trunc(thirdValue);
const truncSum = Math.floor(firstValueTrunc + secondValueTrunc + thirdValueTrunc);
console.log("Вартість всіх заокруглених товарів: ", truncSum);

let sumFixedToHundreds = Math.floor((sum / 100).toFixed(2)) * 100;
console.log("Вартість всіх товарів округлена до сотень", sumFixedToHundreds);

let boolean = Boolean (Math.floor(sum) % 2);
console.log("Булеве значення (парне чи не парне): ",boolean);

console.log("Решта, при оплаті товарів купюрою 500: ", 500 - sum);

let middlePrice = (sum /3).toFixed(2);
console.log("Середнє значення цін:", middlePrice);

const randomNumbers = (Math.random() * (10 - 1) + 1).toFixed();
console.log("Знижка", randomNumbers, "%");
const priceWithDiscount = ((sum - (sum*(randomNumbers)/100)).toFixed(2)); 
console.log("Сума до оплати з знижкою: ", priceWithDiscount);

const netFirstValue = firstValue / 2;
const netSecondValue = secondValue / 2;
const netThirdValue = thirdValue / 2;

const netSum = (netFirstValue + netSecondValue + netThirdValue);
console.log("Чистий прибуток, якщо клієнт заплатив зі знижкою: ", (priceWithDiscount- netSum).toFixed(2));

