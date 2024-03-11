console.log("Задание 1");

const testArr = [1,[1,2,[3,[1,2,3,[3,[12,[34],2],43,5]],4]],[2,4]];

function combineArr(arr){
    const combinedStr = arr.reduce((accumulator, currentValue) => accumulator + currentValue.toString()+',', '');
    return combinedStr.slice(0,-1).split(',').map(Number)
}

console.log(combineArr(testArr))


console.log("Задание 2");


console.log(combineArr(testArr).reduce((accumulator, currentValue) => accumulator + currentValue, 0))


console.log("Задание 3");


const students = [
    {
        groupId:2,
        name: "Vlad",
        age: 18
    },
    {
        groupId:1,
        name: "Andrew",
        age: 19
    },
    {
        groupId:2,
        name: "Ivan",
        age: 17
    },
    {
        groupId:2,
        name: "Roman",
        age: 18
    },
    {
        groupId:3,
        name: "Maxim",
        age: 20
    }
]

function createGroups(students){
    let groupNumbers = new Set();

    students.forEach((student)=>{
        groupNumbers.add(student.groupId);
    })

    let groups = {}

    groupNumbers.forEach((groupId)=>{
        groups[groupId] = students.filter((student) => student.groupId === groupId && student.age > 17);
    })
    return groups
}

console.log(createGroups(students))


console.log("Задание 4");


function converterOfWords(str){
    str = str.split('').map(x => x.charCodeAt(0)).join('');
    let str2 = str.replace(/7/gm,"1");
    return str - str2
}

console.log(converterOfWords('ABC'))


console.log("Задание 5");


function extend(){
    let combinedObj = {};
    for (let i = 0; i < arguments.length; i++) {
        combinedObj = Object.assign(combinedObj,arguments[i]);
    }
    return combinedObj
}

console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4}))



console.log("Задание 6");


function createTower(floors){
    let tower = [];
    const char = '*';
    const space = ' ';
    let charsOnFloor = 1;
    for (let i = 1; i <= floors;i++){
        const flour = space.repeat((floors*2-charsOnFloor)/2) + char.repeat(charsOnFloor) + space.repeat((floors*2-charsOnFloor)/2)
        tower.push(flour)
        charsOnFloor += 2
    }
    return tower
}

console.log(createTower(5))
