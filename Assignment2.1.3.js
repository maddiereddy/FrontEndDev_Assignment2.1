/*
Create Array destructuring (which works for all iterable values)
where you have all your friends name then console one by one all separately.
var foo = ["one", "two", "three"];
var [one, two, three] = foo; console.log(one); // "one"
*/

let friends = ['Durga', 'Shubhra', 'Mita', 'Yachna', 'Baidehi', 'Rukmini'];
var [one, two, three, four, five, six] = friends;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
