function add(num1, num2) {
    return num1 + num2;
}
// add('1', '1') помилка , неправильний тип данних 
add(1, 1);
function greet(person) {
    return 'Hello,' + person.firstName + ' ' + person.lastName;
}
let user = { firstName: 'Josh', lastName: 'Doe' };
// let user = { name: 'John' };буде помилка т к не правильно передали данні
console.log(greet(user));
// приклад 3
//# sourceMappingURL=index.js.map