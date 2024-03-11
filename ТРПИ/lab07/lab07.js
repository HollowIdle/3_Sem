console.log("Задание 1, 2");

let products = {
    shoes:{
        boots:[
            {
                id:558,
                size:45,
                color:"black",
                price:200
            },
            {
                id:559,
                size:43,
                color:"haki",
                price:250
            },
        ],
        sneakers:[
            {
                id:950,
                size:40,
                color:"white",
                price:150
            },
            {
                id:951,
                size:41,
                color:"red",
                price:235
            }
        ],
        sandals:[
            {
                id:120,
                size:44,
                color:"cyan",
                price:700
            },
            {
                id:121,
                size:44,
                color:"yellow",
                price:750
            }
        ]
    }
}
products.shoes[Symbol.iterator] = function*()
{
    const typesOfShoes = Object.keys(this);
    for(let typeOfShoes of typesOfShoes)
    {
        yield this[typeOfShoes];
    }
}
function filteredShoes(products,minPrice,maxPrice,size,color)
{
    for(let typeOfShoes of products.shoes){
        for(let shoePair of typeOfShoes){
            if(shoePair.price>=minPrice && shoePair.price<=maxPrice &&
            shoePair.size === size && shoePair.color === color)
            {
                console.log(shoePair.id);
            }
        }
    }
}

filteredShoes(products,700, 800,44,"yellow");

console.log("Задание 3");

let newProducts = {
    shoes: {
        boots: [
            {
                id: 558,
                size: 45,
                color: "black",
                cost: 200,
                discount: 50
            },
            {
                id: 559,
                size: 43,
                color: "haki",
                cost: 250,
                discount: 40
            },
        ],
        sneakers: [
            {
                id: 950,
                size: 40,
                color: "white",
                cost: 150,
                discount: 60
            },
            {
                id: 951,
                size: 41,
                color: "red",
                cost: 235,
                discount: 20
            }
        ],
        sandals: [
            {
                id: 120,
                size: 44,
                color: "cyan",
                cost: 700,
                discount: 40
            },
            {
                id: 121,
                size: 44,
                color: "yellow",
                cost: 750,
                discount: 20
            }
        ]
    }
}

newProducts.shoes[Symbol.iterator] = function*()
{
    const typesOfShoes = Object.keys(this);
    for(let typeOfShoes of typesOfShoes)
    {
        yield this[typeOfShoes];
    }
}
for(let typeOfShoes of newProducts.shoes)
{
    for(let shoePair of typeOfShoes)
    {
        Object.defineProperty(shoePair,"price", {
            get() {
                return this.cost - (this.cost * this.discount / 100);
            },
            configurable: true
        });
    }
}
console.log(newProducts.shoes.sneakers[1].price);
console.log("Задание 4")
for(let typeOfShoes of newProducts.shoes)
{
    for(let shoePair of typeOfShoes)
    {
        Object.defineProperty(shoePair,"price",
            {
                writable:true,
                enumerable:true,
                configurable:false
            }
            )
        Object.defineProperty(shoePair,"id",
            {
                writable:false,
                enumerable:true,
                configurable:false
            }
        )
    }
}
console.log(newProducts.shoes.sneakers[0].id);
newProducts.shoes.sneakers[0].id = 50;
console.log(newProducts.shoes.sneakers[0].id);
console.log("Задание 5");
function ShoesPair(id,size,color,cost,discount){
    this.id = id;
    this.size= size;
    this.color = color;
    this.cost = cost;
    this.discount = discount;
    Object.defineProperty(this,"price",
        {
            get(){
                return this.cost - (this.cost * this.discount/100);
            },
            enumerable: true,
            configurable: true
        }
        )
}
console.log("Задание 6");
let allProducts ={
    shoes:{
        boots:[],
        sneakers:[],
        sandals:[]
    }
};
for(let shoesTypeKey of Object.keys(newProducts.shoes))
{
    let shoesType = newProducts.shoes[shoesTypeKey];
    for(let shoesPair of shoesType)
    {
        let newProduct = new ShoesPair(
            shoesPair.id,
            shoesPair.size,
            shoesPair.color,
            shoesPair.cost,
            shoesPair.discount
        );
        allProducts.shoes[shoesTypeKey].push(newProduct);
    }
}

console.log(allProducts);





