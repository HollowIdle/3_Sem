var x = {key:60,name:"Aaron"};
var ad = 38;
function task2(){
    console.log("Задание 2");
    function parallel(a){
        return (b) => {
            return (c) => {
                return a * b * c;
            }
        }
    }
    console.log(`Объем параллелепипеда №1: ${parallel(2)(3)(4)}`);
    let parallel2 = parallel(2);
    console.log(`Объем параллелепипеда №2: ${parallel2(9)(8)}`);
    console.log(`Объем параллелепипеда №3: ${parallel2(6)(5)}`);
    console.log(`Объем параллелепипеда №4: ${parallel2(1)(3)}`);
}
function task3(){
    console.log("Задание 3");
    function* move() {
        var a;
        let x = 0;
        let y = 0;
        let direction;

        for (let i = 0; i < 10; i++) {
            direction = (a = prompt("Введите направление")) !== null && a !== void 0 ? a : "default";
            switch (direction.trim().toLowerCase()) {
                case "left":
                    x--;
                    break;
                case "right":
                    x++;
                    break;
                case "up":
                    y++;
                    break;
                case "down":
                    y--;
                    break;
            }
            if(i===9) {
                return [x, y];
            }
            yield [x, y];

        }
    }

    let generator = move();
    let b;
    for (let i = 0; i < 10; i++) {
        b = generator.next();
        console.log(b.value);
        if(b.done){
            console.log("Ходы закончились");
        }
    }
}

function makeCounter(){
    let currentCount = 1;

    return function () {
        return currentCount++;
    };
}

let counter = makeCounter();

console.log( counter());
console.log( counter());
console.log( counter());

let counter2 = makeCounter();
console.log( counter2());





//task2();
//task3();

/*
console.log(window.x)
console.log(window.ad)

window.x.name = "Michael";

console.log(x);
*/