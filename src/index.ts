function add(num1: number, num2: number) {
    return num1 + num2;
}

// add('1', '1') помилка , неправильний тип данних 
add(1, 1)



// приклад 2

type Person = {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return 'Hello,' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Josh', lastName: 'Doe' };

// let user = { name: 'John' };буде помилка т к не правильно передали данні
console.log(greet(user));


// приклад 3



