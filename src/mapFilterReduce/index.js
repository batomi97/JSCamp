let products = [
    {id:1, name:"Acer Laptop", unitPrice:15000},
    {id:2, name:"Asus Laptop", unitPrice:16000},
    {id:3, name:"Hp Laptop", unitPrice:13000},
    {id:4, name:"Dell Laptop", unitPrice:12000},
    {id:5, name:"Casper Laptop", unitPrice:17000}
]

console.log("<ul>")
products.map(product => console.log(`<li>${product.name}</li>`))
console.log("</ul>")