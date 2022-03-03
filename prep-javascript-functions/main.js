function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greetings = getGreeting('World');
console.log('greeting:', greetings);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * num2;
}

var product = addAndMultiplyBy5(10, 5);
console.log('add and multiply:', product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var division = multiplyAndDivideBy5(35, 10);
console.log('multiply and divide:', division);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullname = getFullName('Juan', 'Ramirez');
console.log('full name:', fullname);

function cube(number) {
  return Math.pow(number, 3);
}

var cubed = cube(5);
console.log('cube:', cubed);
