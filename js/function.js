// 0) Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65). Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа.

// function isWorkingAgePerson(age) {
//   return (age >= 16 && age < 65);
// }
// console.log(isWorkingAgePerson(Number(prompt("Enter your age."))));

// 1) *Функция, которая запрашивает число и проверяет, простое ли оно (простое число делится без остатка на себя и на единицу).

// function isPrime() {
//   const userNumber = Number(prompt("Enter a number bigger than 0"));
//   if (userNumber) {
//     let sum = 0;
//     for (let i = 1; i <= userNumber; i++) {
//       if (userNumber % i === 0) {
//         sum++;
//       }
//     }
//     if (sum === 2) {
//       console.log(`${userNumber} is a prime number!`);
//     } else {
//       console.log(`${userNumber} isn't a prime number!`);
//     }
//   } else {
//     alert("It's not a number.");
//   }
// }
// isPrime();


// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело

// function checkMultiplicity(a, b) {
//   return a % b === 0;
// }
// console.log(checkMultiplicity(25, 5));
// console.log(checkMultiplicity(15, 3));
// console.log(checkMultiplicity(15, 5));
// console.log(checkMultiplicity(15, 4));


// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.

// function isTriangle(a, b, c) {
//   return a + b >= c && b + c >= a && a + c >= b;
// }
// console.log(isTriangle(3, 4, 5)); // египетский треугольник
// console.log(isTriangle(3, 3, 6)); // вырожденный треугольник
// console.log(isTriangle(3, 2, 5)); // не треугольник


// 4) Написать функции расчета площадей (или поверхности) следующих фигур/тел: треугольника, прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур. Функция должна возвращать вычисленное значение.

// /**
//  * function for calculate an area of triangle.
//  * @param {number} a - first side of triangle
//  * @param {number} b - second side of triangle 
//  * @param {number} c - third side of triangle 
//  * @returns {number} an area of triangle.
//  */
// function triangleArea(a, b, c) {
//   const p = (a + b + c) / 2;
//   const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   return area;
// }
// console.log(triangleArea(3, 4, 5));

// /**
//  * function for calculate an area of rectangle.
//  * @param {number} a - first side of rectangle
//  * @param {number} b - second side of rectangle
//  * @returns {number} an area of rectangle.
//  */
// function rectangleArea(a, b) {
//   return a * b;
// }
// console.log(rectangleArea(3, 4));

// let coneArea = function(r, l) {
//   return Math.PI * r ** 2 + Math.PI * r * l;
// };
// console.log(coneArea(3, 5));

// let parallelepipedArea = function(a, b, c) {
//   return 2 * (a * b + a * c + b * c);
// };
// console.log(parallelepipedArea(3, 4, 5));

