/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email.

  В prototype функции-конструктора добавь метод getInfo(),
  который выводит в консоль значения полей login и email.

  Обрати внимание, метод всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`'Login:'${this.login}, 'Email:'${this.email}`);
};

const account = new Account('Mangozedog', 'mango@dog.woof');
const account1 = new Account('Doct', 'Zlo1@gmail.com');
const account2 = new Account('Docto', 'Zlo2@gmail.com');
const account3 = new Account('Doctor', 'Zlo3@gmail.com');


console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
account1.getInfo();
account2.getInfo();
account3.getInfo();
