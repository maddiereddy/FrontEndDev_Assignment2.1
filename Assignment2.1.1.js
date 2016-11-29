/**
 * Created by maddie on 11/28/16.
 */

/*function Person(name) {
    this.name = name;
}
Person.prototype.prefixName = function (arr) {
    return arr.map(function (character) {
        return this.name + character; }, this);
};
*/

function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(character => {
      return `${this.name}${character}`;
    }, this);
};

let maddie = new Person('maddie');
console.log(maddie.prefixName([1, 2, 3]));
