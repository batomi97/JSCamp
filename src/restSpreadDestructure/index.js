//Ödev
console.log("---------ÖDEV----------")

let sayi1 = 10
sayi1 = "Batuhan Güner"
let student = {id:1, name:"Batuhan"}
//console.log(student)

function save(ogrenci, puan=10) {
    //console.log(ogrenci.name + " : " + puan)
}

save(student, 100);

let students = ["Batuhan Güner", "Buğrahan Güner", "Engin Demiroğ"]
//console.log(students)

let students2 = [student, {id:2, name:"Nurbanu"}, "İstanbul", {city:"Ankara"}]
//console.log(students2)

//rest Konusu//
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts) 
//showProducts(10, ["Elma", "Armut", "Karpuz"] ) -> Rest olayı

//spread Konusu//
let points = [1, 2, 3, 4, 50, 4, 60, 14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

//destructuring Konusu//
let populations = [10000, 20000, 30000, [40000, 100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id) //Alttaki ile aynı kullanımı
console.log(category["name"]) //Üstteki ile aynı kullanımı

let {id, name} = category
console.log(id)
console.log(name)