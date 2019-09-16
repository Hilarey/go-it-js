let total = 0;
let input;
const numbers = [];
while (true) {
  input = prompt('Введите число');
  numbers.push(Number(input));
  if (input === null) break;
}
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Общая сумма чисел равна ${total}`);

// let total = 0;
// while (input = parseFloat(prompt('Введите число:'))) {
//   total += input;
// }
// alert(`Общая сумма чисел равна ${total}`);
