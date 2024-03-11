let number=5;
window.number;

function basicOperation(operation, value1, value2) {
    if (operation === '+') return value1 + value2
    if (operation === '-') return value1 - value2
    if (operation === '*') return value1 * value2
    if (operation === '/') return value1 / value2
}
console.log("Задание 1");
console.log(basicOperation('/', 5, 10))

console.log("Задание 2")
function Cubing(){
    const n  = Number(prompt("enter n"))

    if (n > 0){
        let sum = 0;
        for (let i = 1;i <= n;i++){
            sum += i*i*i
        }
        console.log("n = " + n);
        console.log(sum)
    }
}
Cubing()
console.log("Задание 3")
const numberArr = [2,4,6,8]

const getAverage = (numbers) =>
    numbers.reduce((accumulator, currentValue) => accumulator + currentValue / numbers.length, 0);


console.log(getAverage(numberArr))

console.log("Задание 4")
const reversWithMatching = (str) => {
    const regex = /[^A-z]/gm;
    str = str.replace(regex,'').split("").reverse().join("");
    console.log(str)
}

reversWithMatching("JavaScr53э?ipt")

console.log("Задание 5")

function copyStr(n, str){
    let NewStr= ''
    for (let i = 0; i < n; i++){
        NewStr += str
    }
   console.log(NewStr)
}

copyStr(2,'stroka');

console.log("Задание 6")

function excludeFromArr(arr1, arr2){
    return arr1.filter((el)=> !arr2.includes(el))
}

const arr1 = ["1212","ddsds","45"]
const arr2 = ["45","ddsds"]

console.log(excludeFromArr(arr1,arr2))
