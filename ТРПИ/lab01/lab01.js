//Задание 1
console.log("Задание 1");
let a = 5;          //числовой
console.log(typeof a);
let name = "Name";  //Строковый
console.log(typeof name);
let i = 0;          //числовой
console.log(typeof i);
let double = 0.23;  //числовой
console.log(typeof double);
let result = 1/0;   //числовой
console.log(typeof result);
let answer = true;  //булевый
console.log(typeof answer);
let no = null;      //object
console.log(typeof no);

//Задание 2

console.log("Задание 2")
let S_A = 0;
a = 45;
let b = 21;
S_A = a*b;
console.log("Площадь четырёхугольника A = " + S_A + " мм");

//Задание 3

console.log("Задание 3")
let S_B = Math.pow(5,2);
let num_kv = S_A / S_B;
num_kv = Math.floor(num_kv);
console.log("Кол-во квадратов B которые смогут поместиться в четырёхугольнике A = " + num_kv);

//Задание 4

console.log("Задание 4");
 i = 2;
 a = ++i;
 b = i++;
 console.log(a==b);

 //Задание 5

console.log("Задание 5");
console.log("Котик" === "котик")
console.log("Котик" === "китик")
console.log("Котик" === "Кот")
console.log("Привет" === "Пока")
console.log(73 == "53")
console.log(0 === false)
console.log(54 === true)
console.log(123 == false)
console.log("3" === true)
console.log(3 === "5мм")
console.log(8 === "-2")
console.log(34 === "34")
console.log(null === undefined)

//Задание 6

console.log("Задание 6");

function isTeacher(){
    const teacherName = 'марина'
    const teacherLastName = 'кудлацкая'
    const teacherSecondName = 'федоровна'
    const name = prompt("enter name")
    if (name){
        let isMatch;
        const nameParts = name.split(' ').map(el => el.toLowerCase());
        if (nameParts.length === 1){
            isMatch = teacherName === nameParts[0]
        }
        if (nameParts.length === 2){
            isMatch = teacherName === nameParts[0] && teacherSecondName === nameParts[1]
        }
        if (nameParts.length === 3){
            isMatch = teacherLastName === nameParts[0] && teacherName === nameParts[1] && teacherSecondName === nameParts[2]
        }

        if (isMatch) {
            alert("name match")
        }
        else{
            alert("name doesn't match");
        }
    }
}

isTeacher();

//Задание 7

console.log("Задание 7");

let mathMark = prompt("Введите оценку по математике");
let engMark = prompt("Введите оценку по английскому");
let rusMark = prompt("Введите оценку по русскому");

if (mathMark >= 4 && engMark >= 4 && rusMark >= 4) {
    alert("Вы прошли на следующий курс");
} else if (mathMark < 4 && engMark < 4 && rusMark < 4) {
    alert("Вас отчислят");
} else {
    alert("Вас ждёт пересдача");
}

//Задание 8

console.log("Задание 8");

a = Number(prompt("Введите число a"));
b = Number(prompt("Введите число b"));
let ba,ab;
console.log(a+b);
if (b>a){
    ba = b-a;
    ba = Math.abs(ba);
    console.log("Разинца между числами - " + ba);
}
else{
    ab = a-b;
    ab = Math.abs(ab);
    console.log("Разинца между числами - " + ab);
}
 console.log(a/b);
 console.log(a*b);
 let n = Number(prompt("Введите n"));
 console.log("a^2 = " + Math.pow(a,n) + " b^2 =" + Math.pow(b,n));
 console.log("sqrt(a) = " + Math.sqrt(a) + " sqrt(b) = " + Math.sqrt(b));
 console.log(a % b);


//Задание 9

console.log("Задание 9");

console.log(true + true);
console.log(0 + "5");
console.log(5 + "мм");
console.log(8 / Infinity);
console.log(9 * "\n9");
console.log(null - 1);
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log('name' && 5);

//Задание 10

console.log("Задание 10");

for (let i = 1, b = 0; i <= 10; i++){
    b = i;

    if (i % 2 === 0) {
        alert(Number(b) + 2);
    } else {
        alert(i + "мм");
    }
}

//Задание 11

console.log("Задание 11");

const days = ['пн','вт','ср','чт','пт','сб','вс']
const daysObj = {
    '1':'пн',
    '2':'вт',
    '3':'ср',
    '4':'чт',
    '5':'пт',
    '6':'сб',
    '7':'вс'
}

const dayNumber = prompt("enter day number")
if (dayNumber > 0 && dayNumber <8) {
    alert(days[dayNumber-1])
    alert(daysObj[dayNumber])
}
