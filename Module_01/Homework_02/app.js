const credits = '23580';
const pricePerDroid = '3000';
const noneMoney = 'Недостаточно средств на счету!';
const cancel = 'Отменено пользователем!';
const droidSum = 'Напишите сумму дроидов для покупки';
const droidSumMinus = 'Введите корректное число';
let message = prompt(droidSum);
const totalPrice = pricePerDroid * message;
const cost = credits - pricePerDroid * message;
if (message === null) {
  message = cancel;
} else if (message <= 0) {
  message = droidSumMinus;
} else if (credits < totalPrice) {
  message = noneMoney;
} else if (credits >= totalPrice) {
  message = `Вы купили ${message} дроидов, на счету осталось ${cost} кредитов.`;
} else {
  message = droidSumMinus;
}

alert(message);
