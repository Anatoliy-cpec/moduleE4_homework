// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

const obj1 = {a:1, b:2, c:'3', d:'4'};

function checkProperty(str, obj) {
    return Object.hasOwnProperty.call(obj, str);
}
