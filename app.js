const _ = require('lodash');

testArray = [4, 2, 8, 6];

/** zad 1 */
function avg(items) {
    return _.mean(items)
}

/** zad 2 */
function max(items) {
    return _.max(items)
}

function  min(items) {
    return _.min(items)
}

console.log(avg(testArray))
console.log(max(testArray));
console.log(min(testArray));
