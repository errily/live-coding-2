console.log('foreach')
let number1 = [2,4,6,7]

number1.forEach(num => {
    console.log(num);
});
console.log('\n')

console.log('filter')
let number2 = [2,4,6,7];
let genap1 = number2.filter(num=> {
    return num % 2 == 0;
})

    console.log(genap1);
    console.log('\n')

console.log('find')
let number3 = [2,4,6,7];
let genap2 = number3.find(num=> {
    return num % 2 == 0;
})

    console.log(genap2);
