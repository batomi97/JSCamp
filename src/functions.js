//FUNCTIONS
function addToCart(quantity , productName = "Elma") {
    console.log("Sepete eklendi -> ürün :" + productName + " adet :" + quantity)
}

//addToCart("Yumurta")
addToCart(10)
//ddToCart(15)

//---ArrownFunctions ---\\
let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}

sayHello2()

//NESNEL OBJE

function addtoCart2(productName, quantity, unitPrice) {
    
}

addtoCart2("Elma", 5, 10)
addtoCart2("Armut", 2, 20)
addtoCart2("Limon", 3, 15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addtoCart3(product) {
    console.log("Ürün: " + product.productName)  
    console.log("Adet: " + product.quantity) 
    console.log("Fiyat: " + product.unitPrice)   
}

addtoCart3(product1)

//---Değer ve Referans Tipler ---\\
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100;
console.log(sayi1)
//-----\\

function addtoCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addtoCart4(products)

//---REST,SPREAD,DESTRUCTURE---\\

function add(bisey, ...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]     
    }
    console.log(total)
    console.log(bisey)
}

add(20, 30)
//add(20, 30, 40)
//add(20, 30, 40, 50)

let numbers = [30, 10, 500, 600, 120]
//console.log(...numbers)
console.log(Math.max(...numbers)) //spread

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"}, 
    {name:"Marmara", population:"30M"}, 
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
] //Destructure

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
(
    {productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5}
)

// let {productName, unitPrice, quantity} = {productName:"Elma", unitPrice:10, quantity:5}

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
