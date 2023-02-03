let N = 0;
let M = 0;
let even_numbers;
let rezult = 0;

do {N>M || !Number.isInteger(N)||!Number.isInteger(M)? alert("Введено не коректне число") : N=0, M=0;
    N = Number(prompt("Введіть перший доданок"));
    M = Number(prompt("Введіть другий доданок"));
    even_numbers= confirm("Щоб пропускаті парні числа нажміть - OK??");  
} while (N>M || !Number.isInteger(N)||!Number.isInteger(M));

// N = Number(prompt("Введіть перший доданок"));
// M = Number(prompt("Введіть другий доданок"));
// even_numbers = confirm("Щоб пропускаті парні числа нажміть - OK??");
// ---------Чому це не працює?
// while (!Number.isInteger(N) || !Number.isInteger(M)) {
//     !Number.isInteger(N) || !Number.isInteger(M) ? alert("Введено не коректне число") : N = 0, M = 0;
// }


for (let i = N; i < M; i++) {
    if (even_numbers) { i % 2 ? rezult += i : rezult; }
    else { rezult += i; }
};

console.log(rezult);