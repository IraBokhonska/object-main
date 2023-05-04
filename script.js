//виведення значення
const person = {
  name: "Sierra",
  surname: "Quigley",
  age: 14,
  email: "Alfreda12@yahoo.com",
  isOpenToWork: false,
  0: "123",
};

console.log(person.name);
console.log(person["0"]); // ключi числа не можна ставити через крапку

//виведення всіх ключів
console.log(Object.keys(person)); //виводить ключі не по порядку
console.log(Object.values(person)); //виводить усі значення масиву

// -------------------------------------------------------------------------------------------------------------------------------------------------
const usersList = [
  {
    name: "Sierra",
    surname: "Quigley",
    age: 14,
    email: "Alfreda12@yahoo.com",
    isOpenToWork: false,
  },
  {
    name: "Barton",
    surname: "Corkery",
    age: 100,
    email: "Dewitt.Kohler71@gmail.com",
    isOpenToWork: true,
  },
];

usersList.forEach((item) => {
  console.log(
    `User ${item.name} ${item.surname}, user age is ${item.age}, ${item.email}`
  );
}); // User Sierra Quigley, user age is 14, Alfreda12@yahoo.com
// script.js:37 User Barton Corkery, user age is 100, Dewitt.Kohler71@gmail.com
// тобто даний метод показує всі об'єкти всередині масиву

usersList.forEach((item) => {
  console.log(item);
});

const usersAges = { Randi: 4, Godfrey: 39, Lelia: 45, Jacey: 74, Keira: 30 };

for (const item in usersAges) {
  console.log(item, usersAges[item]);
}

// ----------------------------------------------------------------------------------------------------------------------------------

// урок по об'єктах (символ в об'єкті)

const someName = Symbol("some name");

const car = {
  doors: 4,
  color: "red",
  mark: "BMW",
  "avg Speed": {
    engine: 500,
  },

  relatedCar: {
    doors: 2,
    color: "green",
    mark: "BMW",
  },

  [someName]: "best car",
};

// перевірка ключа в об'єкті---------------------------------------------------------------------------------------

console.log("mark" in car); //true
console.log(!!car.mark1); //false
console.log(car.hasOwnProperty("mark1")); //false
console.log(car["avg Speed"].engine); //500
console.log(car["avg Speed"]); // {engine: 500}

console.log(car.relatedCar?.small); //false (у разі, якщо цього не зробити і значення неправильне, буде помилка)
console.log((car.relatedCar || {}).color); //green
console.log((car.relatedCar || {}).engine); //undefined

//введення нового ключа в об'єкт-----------------------------------------------------------------------------------

car.testKey = "test value";

//введення змінної в об'єкт---------------------------------------------------------------------------------------

/*const userKey = prompt('input key name'); 
const userInputValue = prompt('enter your value');

car[userKey] = userInputValue; // додає змінну userKey

console.log(car);*/

// видалення чогось з об'єкта--------------------------------------------------------------------------------------

delete car.testKey;
console.log(car);
console.table(car); //виведення об'єкта в таблицю

// 2 спосіб оголосити об'єкт(конструктор об'єкта)-------------------------------------------------------------------

/*const car = new Object({
  doors: 4,
});
console.log(car);*/

// МЕТОДИ В ОБ'ЄКТАХ________________________________________________________________________________________________
/*const car = {
  doors: 4,
  color: "red",
  drive: function() {
    console.log("woom woom");
  },
  open: () => {
    console.log("door open"); // стрілочна функція
  },
  stop (){
    console.log("stop!!!"); // найкращий спосіб запису
  },
};

car.drive();
car.open();
car.stop();*/

const dog = {
  paw: 4,
  tail: "grey",
  sound() {
    console.log("gav, gav!");
  },
};

dog.sound();

/*const doggy = {
  name: "Rox",
  color: "brown",
  paws: { right: 2, left: 2 },
  toys: [],

  sound: () => {
    console.log("Гав-гав!");
  },

  giveToy: (newToy) => {
    doggy.toys.push(newToy);
  },
};

console.log(JSON.stringify(doggy.toys));//Метод JSON.stringify() приймає об'єкт у якості вхідного параметру та повертає рядок 

doggy.giveToy("ball");
console.log(doggy.toys);//[ball]*/

const doggy = {
  name: "Rox",
  color: "brown",
  paws: { right: 2, left: 2 },
  toys: [],

  sound: () => {
    console.log("Гав-гав!");
  },

  giveToy(newToy) {
    console.log(this.toys.push(newToy));
  },

  showToy() {
    console.log(this.toys); //щоб працювати із this функція не може бути стрілочна!!!!!!!!!
  },

  removeToys() {
    this.toys = [];
  },

  training(command, callback) {
    this[command] = callback;
  },
};

doggy.showToy();
doggy.giveToy("ball");
doggy.showToy();
doggy.removeToys();
doggy.showToy();

doggy.training("sleep", () => {
  console.log("sleep");
});

doggy.sleep();
