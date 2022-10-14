const _ = require('lodash');

testArray = [4, 2, 8, 6];

/** zad 1 */
function avg(items) {
    return _.mean(items)
}

console.log(avg(testArray))