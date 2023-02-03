const ukraine = {
    tax: 0.195 ,
    middleSalary: 1789,
    vacancies: 11476
};

const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

function getMyTaxes(salary) {
    return this.tax * salary;
};

function getMiddleTaxes() {
    return (this.tax * this.middleSalary).toFixed(0)
};

function getTotalTaxes() {
    return (this.tax * this.middleSalary * this.vacancies).toFixed(0)
};

function getMySalary() {
    let result = {};
    result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    result.taxes = (this.tax * result.salary).toFixed(0);
    result.profit = result.salary - result.taxes;
    return result;
};
// const interval = setInterval( () => console.log("Моя зарплата: ", getMySalary.call(ukraine)), 1000);

console.log("Home Work 7");
console.log("Я сплатив податку: ", getMyTaxes.call(ukraine, 3000));
console.log("Середній податок: ", getMiddleTaxes.call(ukraine));
console.log("Загально програмісти сплатили податку: ",getTotalTaxes.call(ukraine));
// console.log(interval);