let products = [
    {name: "Apple", type: "Fruit"},
    {name: "Monitor", type: "Computer"},
    {name: "Mango", type: "Fruit"},
    {name: "Tablet", type: "Furniture"}
];

console.log(
    products.every(produk => produk.type === "Fruit")
);

//harus semuanya fruit = true
//ada yg bukan fruit = false 