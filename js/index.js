//1
let age = 16;
console.log(age);
//2
const name = "Nastya";
console.log(name);
//3
const isStudent = true;
console.log(isStudent);
//4
let myString = "Будьте з тими людьми, які змушують вас посміхатися у важкі часи";
console.log(myString);
//5
let myNumber = 10;
myNumber = myNumber + 40;
myNumber + 10;
console.log(myNumber);
//6
const myNull = null;
console.log(myNull);
//7
const newMessage = prompt("Введіть своє ім'я");
console.log(newMessage)
console.log(typeof newMessage);
alert(`Привіт, ${newMessage}!`);
//8
const message = confirm("Ви дійсно хочете покинути сторінку?");
console.log(typeof message);
if (message === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
//9
alert(" Увага! Дія може бути небезпечною. ");
const warningMessage = confirm("Ви впевнені що хочете продовжити?");

if (warningMessage === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}