const adminPassword = 'm4ng0h4ckz';
const title = 'Авторизация';
const enter = 'Добро пожаловать!';
const incorrectPassword = 'Доступ запрещен, неверный пароль!';
const cancel = 'Отменено пользователем!';
let message = prompt(title);
if (message === null) {
  message = cancel;
} else if (message === adminPassword) {
  message = enter;
} else {
  message = incorrectPassword;
}
alert(message);
