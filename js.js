function showMessage(){
    console.log("Добро пожоловать в JavaScript!")
}
showMessage()



function greetUser(name){
    console.log(`добрый день, ${name}!`)
}
greetUser("Адилет")
greetUser("Aйпери")
greetUser("Эмир")



function showAge(age){
    console.log(`Мне ${age} лет`)
}
showAge(15)
showAge(16)
showAge(9)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function findEvenNumbers(array) {
    let even = []
    for (let num in array) {
        if  (num % 2 === 0) {
            even.push(num)
        }
    }
    return even
}

console.log(findEvenNumbers(numbers))

function findEvenNumbers(array){
    let big_numbers = []
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 5) {
            big_numbers.push(array[i])
        }
    }
    return big_numbers
}
 console.log(findEvenNumbers(numbers))



 function squareArea(a) {
  return a * a;
}

console.log(squareArea(5))




function checkNumber(num) {
    if (num === 10) {
        console.log("Правильно");
    } else {
        console.log("Неправильно");
    }
}
function checkEven(num) {
    if (num % 2 === 0) {
        console.log("да");
    } else {
        console.log("нет");
    }
}
function checkPassword(password) {
    if (password === "1234") {
        console.log("Доступ разрешён");
    } else {
        console.log("Неверный пароль");
    }
}
checkNumber(10);
checkEven(7);
checkPassword("1234");