/*Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}*/

function checkAge(age){
    return (age > 18)? true : confirm('Родители разрешили?');

}
console.log(checkAge(22));

/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

function min(a,b){
    return (a<b)? a : b;
}
console.log(min(3,-1));

/*Функция pow(x,n)
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат*/


function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3,4));


/* Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false.*/
function inArray(text, array) {
    for (var i in array) {
        if (array[i] == text) {
            return true;
        }
    }
    return false;
}



console.log(inArray('two44',['one', 'two', 'threee','four']));


/* Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.*/

function ucfirst(str) {
    var upstr = str[0].toUpperCase() + str.slice(1);
    return upstr;
}

var str = 'one two threee four';
var ucarray = [];

var array = str.split(' ');
for (var i in array) {
    ucarray.push(ucfirst(array[i]));
}

var result = ucarray.join(' ');
console.log(result);

/* Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть измененный массив.*/
var array = ['one','two','threee','four','five'];

var asterisk = function addasterisk(array) {
    var newArray = [];
    for (var i in array) {
        newArray[i]=array[i]+'*';
    }
    return  newArray;
}

each = function(array, asterisk){
    return asterisk(array);
};
console.log(each(array,asterisk));

/* Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций,
которые по очереди применятся к каждому элементу массива: к первому элементу массива - первая функция, ко второму -
вторая и так далее пока функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу.*/

var array = ['one','two','threee','four','five'];

var function1 = function(a){
    return a + '*';
};
var function2 = function(a){
    return a + '**';
};

var functionsArray = [function1,function2];

each = function(array, functionsArray){
    var newArray = [];
    for (var i in array) {
        var action = functionsArray[i % functionsArray.length](array[i]);
        newArray.push(action);
    }
    return  newArray;
}

console.log(each(array,functionsArray));

/* Используя замыкание сделайте функцию, которая считает и выводит количество своих вызовов.*/

function count() {
    var i = 1;
    return function() {
        return i++;
    };
}

var counter = count();

console.log(counter());
console.log(counter());
console.log(counter());