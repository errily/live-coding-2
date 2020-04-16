//es5
var number = [1,2,3,4,5];
var total = 0;
console.log('foreach semua array ');

number.forEach(function(number) {
    console.log( total += number);  
});
console.log('\n');

//es 5 jumlah
var number = [1,2,3,4,5];
var total = 0;

number.forEach(function(number) {
    test = total += number;  
});

//es6
var total1 = [1,2,3,4,5].reduce(function(previous, current) {
    return previous + current; 
}, 0);

console.log('jumlah array dengan es5 ' + total1);
console.log('\n');
console.log('jumlah array dengan es6 ' + test);
console.log('\n')

//iterasi
console.log('iterasi');
var total = [1,2,3,4,5].reduce(function(previous, current, index){
    var val = previous + current;
    console.log("The previous value is " + previous +
        "; the current value is " + current +
        ", and the current iteration is " + (index + 1));
        return val;
}, 0);

console.log("The loop is done, and the final value is " + total + ".");