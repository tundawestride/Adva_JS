//Q2

// function result(num1, num2, calc) {
//     return calc(num1, num2) * 2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(result(4, 2, multiply))

//ให้log = result(4, 2, multiply)
//ฟังชั่นบน return calc(4, 2) * 2
//หาค่า calc = multiply(num1, num2) = return 4*2 = 8
//return = calc * 2 = 8*2 = 16 

//Q1

function result(num1, num2, calc) {
    return calc(num1, num2) * 2;
}

function add(num1, num2) {
    return num1 + num2;
}

console.log(result(4, 2, add))

//ให้log = result(4, 2, add)
//ฟังชั่นบน return calc(4,2) * 2
//หาค่า calc = add(num1, num2) = return 4 + 2 = 6
//return calc(num1, num2) * 2 = 6 * 2 = 12

// function result(num1, num2, calc) {
//     return add(num1, num2) * 2;
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(result(4, 2, add))