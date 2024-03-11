

let zad = Number(prompt("Введите номер задания"));

switch (zad)
{
    case 1:{
        zad1();
        break;
    }
    case 2:{
        zad2();
        break;
    }
    case 3:{
        zad3();
        break;
    }
    case 4:{
        zad4();
        break;
    }
}

function zad1() {
    let products = new Set(["apple","orange","sandwich","milk"]);

    products.add("banana");
    products.delete("apple");
    if(products.has("apple")===true){
        console.log("Продукт присутствует");
    }
    else{
        console.log("Продукт отсутствует");
    }
    console.log(products.size);
}
function zad2(){
    function addStudent(creditBookNumber,group,FIO){
        studentSet.add({creditBookNumber:creditBookNumber,group:group,FIO:FIO});
    }
    function deleteByCreditBookNumber(creditBookNumberForDelete){
            for(let student of studentSet){
                if(student.creditBookNumber === creditBookNumberForDelete){
                    studentSet.delete(student);
                }
            }

    }
    function filterByGroup(){
        let filtered = new Set;
        studentSet.forEach((student) => {
            filtered.add(student.group);
        })
        let filteredGroups = {}

        filtered.forEach((group)=>{
            filteredGroups[group] = students.filter((student) => student.group === group);
        })
        return filteredGroups;
    }
   function sortStudentsByCreditBookNumber(){
        let array = Array.from(studentSet);
        array.sort(function(a,b){
            if(a.creditBookNumber > b.creditBookNumber){
                return 1;
            }
            if (a.creditBookNumber < b.creditBookNumber){
                return  -1;
            }
            return 0;
       });
       let sortedSet = new Set();
        for(let arr of array){
            sortedSet.add(arr);
        }
        return sortedSet;
    }

    let students = [
    {
        creditBookNumber: 111111,
        group: 4,
        FIO: "Потеруха Роман Сергеевич"
    },
    {
        creditBookNumber: 111123,
        group: 4,
        FIO: "Иванов Иван Иванович"
    },
    {
        creditBookNumber: 113623,
        group: 5,
        FIO: "Алексеев Алексей Алексеевич"
    },
    {
        creditBookNumber: 114623,
        group: 6,
        FIO: "Андреев Кирилл Максимович"
    }
    ];
    let studentSet = new Set();
    let studentByGroups = new Set();
    let studentByCreditBookNumber = new Set();
    for(let student of students){
        studentSet.add(student);
    }
    addStudent(112345,6,"Герев Максив Валерьевич");
    deleteByCreditBookNumber(111123);
    studentByGroups = filterByGroup();
    studentByCreditBookNumber = sortStudentsByCreditBookNumber();
}
    function zad3()
    {
        let id = 0;
        function addToBasket(name,amount,price){
            basket.set(id,{name,amount,price});
            id++;
        }
        function deleteById(idForDelete){
            basket.delete(idForDelete);
            amountOfProducts--;
        }
        function deleteByName(nameForDelete){
            for(let [key,value] of basket){
                if(value.name === nameForDelete){
                    basket.delete(key);
                }
            }
            amountOfProducts--;
        }
        function changeAmount(newAmount){
            for(let [key,value] of basket){
                value.amount = newAmount;
            }
        }
        function changePrice(nameOfProduct,newPrice){
            for(let [key,value] of basket){
                if(value.name === nameOfProduct){
                    value.price = newPrice;
                }
            }
        }
        function priceOfAllProducts(){
            let allPrice = 0;
            for(let [key,value] of basket){
               allPrice += value.price;
            }
            console.log(allPrice);
        }
        let basket = new Map();
        let amountOfProducts = id+1;
        addToBasket("apple",10,2);
        addToBasket("milk",2,10);
        addToBasket("orange",8,3);
        addToBasket("cucumber",5,4);
        deleteById(2);
        deleteByName("milk");
        changeAmount(2);
        changePrice("apple",120);
        console.log("Кол-во продуктов в корзине - " + amountOfProducts);
        priceOfAllProducts();
    }
    function zad4(){
        let cache = new WeakMap();
        function forCaching(obj)
        {
            if (cache.has(obj)) {
                console.log("Берём результат из кеша");
                return cache.get(obj);
            }
            console.log("В кеше нет данных -> сохраняем результат в кеш");
            let result = obj;
            cache.set(obj, result);
            return result;
        }
        let obj = { name: "Какой-то объект" };
        let result = forCaching(obj);
        console.log(result);
        let cached = forCaching(obj);
        console.log(cached);
    }