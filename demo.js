console.log("hello")
let a = 10;
let b = 15;
let temp;
temp = a;
a = b;
b = temp;
console.log( 'value of a after swapping', (a));
console.log('value of b after swapping ',(b));
if (a % 2 ==0){
    console.log ("The number is even");
}
else{
    console.log('The number is odd');
}
const result=(b % 2==0) ? "even" : " odd";
console.log (" The numberis: " ,(result));