const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
const attemptsLeft = 3;
let input = '';
let n = 0;
do {
  input = prompt('Введите пароль');
  n += 1;
  if (input === null) {
    alert('Отменено пользователем');
    break;
  } if (passwords.includes(input)) {
    alert('Добро пожаловать!');
    break;
  } if (n === attemptsLeft) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }
  alert(`Неверный пароль, осталось ${attemptsLeft - n} попыток`);
}
while (true);
