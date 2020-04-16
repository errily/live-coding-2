let products = [
    {name: "Apple", type: "Fruit"},
    {name: "Monitor", type: "Computer"},
    {name: "Mango", type: "Fruit"},
    {name: "Tablet", type: "Furniture"}
];

console.log(
    products.some(produk => produk.type === "Fruit")
);

//salah satu ada yg fruit = benar

//es5
